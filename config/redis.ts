import Redis from 'ioredis';

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT) || 6379,
  retryStrategy: () => null // para no reconectar automáticamente si quieres
});

redis.on('error', (err) => {
  console.warn('[Redis]', err.message);
});
