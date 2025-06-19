import Redis from 'ioredis';

export const redisTechnicianServices = new Redis(process.env.REDISTECHNICIANSERVICES_URL!);

redisTechnicianServices.on('error', (err) => {
  console.warn('[Redis]', err.message);
});
