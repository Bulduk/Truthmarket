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

# Python ve gerekli paketleri kur (TruthX AI için)
RUN apk add --no-cache python3 py3-pip git build-base python3-dev

WORKDIR /app

# Builder'dan gerekli dosyaları al
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src/truthx ./src/truthx

# Python bağımlılıklarını kur (Eğer requirements.txt varsa)
RUN if [ -f "src/truthx/requirements.txt" ]; then pip3 install -r src/truthx/requirements.txt --break-system-packages; fi

# Port 3007 (Sistem talimatında belirtildiği gibi)
EXPOSE 3007

CMD ["npm", "run", "start:prod"]
