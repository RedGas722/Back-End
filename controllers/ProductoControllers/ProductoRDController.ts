// cron/actualizarDescuentos.ts
import cron from 'node-cron';
import ProductoServices from '../../services/ProductoServices';

export const iniciarTareaDescuentos = () => {
  cron.schedule('0 0 * * *', async () => {
    console.log('⏰ Ejecutando limpieza de descuentos vencidos...');
    await ProductoServices.ProductoResetearDescuentos();
    console.log('✅ Descuentos vencidos actualizados.');
  });
};
