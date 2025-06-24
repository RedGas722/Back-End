FROM node:18-alpine

# Crear el directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json (muy importante usar los dos)
COPY package.json package-lock.json ./

# Instalación más predecible y limpia
RUN npm ci

# Ahora copiamos el resto del código
COPY . .

# Compilación de TypeScript
RUN npx tsc

# Exponer el puerto
EXPOSE 10101

# Comando por defecto
CMD ["node", "dist/app.js"]
