# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 : builder – installe les dépendances et génère les fichiers statiques
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run generate

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 : runner – nginx:alpine sert les fichiers statiques
# ─────────────────────────────────────────────────────────────────────────────
FROM nginx:alpine AS runner

COPY --from=builder /app/.output/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
