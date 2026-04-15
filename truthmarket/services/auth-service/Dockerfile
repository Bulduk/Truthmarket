FROM node:20-alpine AS builder

WORKDIR /app

# Sadece bağımlılıkları kopyala ve kur (Cache optimizasyonu)
COPY package*.json ./
RUN npm install

# Kaynak kodları kopyala
COPY . .

# Prisma client oluştur
RUN npx prisma generate

# Projeyi derle
RUN npm run build

# Production imajı
FROM node:20-alpine

WORKDIR /app

# Builder'dan gerekli dosyaları al
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Port 3001 (Sistem talimatında belirtildiği gibi)
EXPOSE 3001

CMD ["npm", "run", "start:prod"]
