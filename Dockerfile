FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx tsc

EXPOSE 10101

CMD ["node", "dist/app.js"]
