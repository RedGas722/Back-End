import Redis from 'ioredis';

const redis = new Redis({
  host: 'localhost',
  port: 6379,
  retryStrategy: () => null // Desactiva reconexión automática
});

// Maneja el error para que no quede sin capturar
redis.on('error', (err) => {
  console.warn('[Redis]', err.message); // o simplemente suprime con un console.debug
});