FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Exponemos el puerto que usa la app
EXPOSE 10101

CMD ["node", "dist/app.js"]
