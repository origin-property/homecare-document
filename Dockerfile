FROM node:20-alpine AS builder

WORKDIR /app

COPY . /app

RUN corepack enable && corepack prepare pnpm@latest --activate
ENV PNPM_HOME=/usr/local/bin

RUN pnpm add --global @magidoc/cli@latest && magidoc generate
RUN pnpm install --frozen-lockfile --prefer-frozen-lockfile

COPY . /app

FROM node:20-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

COPY --from=builder --chown=nextjs:nodejs /app/assets ./assets
COPY --from=builder --chown=nextjs:nodejs /app/docs ./docs
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/index.js ./index.js

USER nodejs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "index.js"]%