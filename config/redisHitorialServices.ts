import Redis from 'ioredis';

export const redisHistorialServices = new Redis(process.env.REDISHISTORIALSERVICES_URL!);

redisHistorialServices.on('error', (err) => {
  console.warn('[Redis]', err.message);
});
