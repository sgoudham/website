FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn 
RUN yarn set version berry
RUN yarn install --immutable
RUN yarn add sharp

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

# WARNING: This copies environment variables into the build. **Ensure that this is not the final layer of the image.**
#   It's worth mentioning that this approach is not preferable. I'm just doing it for the sake of simplicity and because no one else has permissions to this repository.
#   I believe the best approach for build time secrets is to use `buildkit` and `--secret` flags. (https://pythonspeed.com/articles/docker-build-secrets/)
COPY . .

ARG DEVELOPMENT=0
ENV DEVELOPMENT=$DEVELOPMENT

RUN yarn build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]
