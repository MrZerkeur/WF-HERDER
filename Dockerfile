FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json .
COPY --from=builder /app/package-lock.json .

RUN npm install --production

CMD ["npm", "start"]