import Redis from 'ioredis';

export const redisServices = new Redis(process.env.REDISSERVICES_URL!);

redisServices.on('error', (err) => {
  console.warn('[Redis]', err.message);
});
