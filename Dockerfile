# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables to skip linting and type checking
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_ENV_VALIDATION=true
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public files
COPY --from=builder /app/public ./public

# Copy package.json for dependencies
COPY --from=builder /app/package.json ./package.json

# Copy .next directory (will contain standalone if configured)
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Copy node_modules (needed if standalone not available)
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Copy next.config.js if exists
COPY --from=builder --chown=nextjs:nodejs /app/next.config.js* ./

# Set correct permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Check if standalone exists, otherwise use next start
CMD if [ -f "./.next/standalone/server.js" ]; then \
      cd ./.next/standalone && node server.js; \
    elif [ -f "./server.js" ]; then \
      node server.js; \
    else \
      npx next start; \
    fi
