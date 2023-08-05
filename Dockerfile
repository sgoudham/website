# Dependencies Image
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn 

RUN yarn set version berry
RUN yarn install --immutable
RUN yarn add sharp

# Build Image
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Keep as empty string as Typescript parses empty strings as false
ARG NEXT_PUBLIC_IS_PREVIEW=""
ENV NEXT_PUBLIC_IS_PREVIEW=$NEXT_PUBLIC_IS_PREVIEW
ARG NEXT_PUBLIC_BUILD_SHA
ENV NEXT_PUBLIC_BUILD_SHA=$NEXT_PUBLIC_BUILD_SHA
ARG NEXT_PUBLIC_BUILD_ID
ENV NEXT_PUBLIC_BUILD_ID=$NEXT_PUBLIC_BUILD_ID
ARG NEXT_PUBLIC_BUILD_NUM
ENV NEXT_PUBLIC_BUILD_NUM=$NEXT_PUBLIC_BUILD_NUM

RUN --mount=type=secret,id=REPOS_READ_ONLY \
  REPOS_READ_ONLY=$(cat /run/secrets/REPOS_READ_ONLY) \
  yarn build

# Production Image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

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
