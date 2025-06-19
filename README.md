# Tienda de Tecnología
## Requisitos
### Tener instalado nodejs v20 o superior.
## Instrucciones
### Copie y pegue las siguentes lineas de codigo en su terminal
npm install
npm install ioredis
npm install node-cron
npm install @google/generative-ai
npm install @google-cloud/vertexai
npm install @types/google-cloud__vertexai --save-dev 
### Cree un archivo de variables de entorno .env en él ponga las siguientes variables
- **DB_HOST:** localhost
- **DB_DATABASE:** nombreBaseDeDatos
- **DB_USERNAME:** nombreDeUsuario
- **DB_PASSWORD:** passwordDelUsuario
### Abra una terminal y ejecute tsc -w para el modo observador de Typescript
### Abra otra terminal y ejecute node ./dist/app para ejecutar el servidor
### node-cron para gestionar el tiempo de los descuentos

