# Step 1: Build the app using a Node.js image
FROM node:24.22.1-alpine AS builder

WORKDIR /app

# Enable corepack for pnpm support
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Step 2: Serve using an Nginx or serve inside Docker (Optional for local testing / Cloud Run)
FROM nginx:1.30.6-alpine
# Pull in Alpine security fixes not yet in the base image
RUN apk upgrade --no-cache
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
