# Installing Dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn add sharp

# Building Website
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production Image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nextjsgroup
RUN adduser --system --uid 1001 nextjsuser

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjsuser:nextjsgroup /app/public ./public
COPY --from=builder --chown=nextjsuser:nextjsgroup /app/package.json ./package.json
COPY --from=builder --chown=nextjsuser:nextjsgroup /app/.next/standalone ./
COPY --from=builder --chown=nextjsuser:nextjsgroup /app/.next/static ./.next/static
COPY --from=builder --chown=nextjsuser:nextjsgroup /app/node_modules/next/dist/compiled/jest-worker ./node_modules/next/dist/compiled/jest-worker

USER nextjsuser

EXPOSE 3000
ENTRYPOINT ["node", "server.js"]
