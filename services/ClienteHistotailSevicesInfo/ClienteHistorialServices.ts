import e from "express";
import { redisHistorialServices } from "../../config/redisHitorialServices";

// obtener información de servicios de un cliente
async function getServicesInfo(userId: number): Promise<string | null> {
   const data = await redisHistorialServices.get(`ServicesInfoCliente:${userId}`);
   return data ?? null;
}

// obtener todos los servicios de los clientes
async function getAllServicesInfo(): Promise<any[]> {
   const keys = await redisHistorialServices.keys("ServicesInfoCliente:*");
   const data = await Promise.all(
      keys.map(async (key) => {
         const value = await redisHistorialServices.get(key);
         const userId = key.split(":")[1];
         return {
            userId,
            ...JSON.parse(value ?? "{}"),
         };
      })
   );

   return data;
}

// agregar información de servicios de un cliente
async function addToServicesInfo(userId: number, descriptionTech: string, totalPrice: number, state: string, item: string): Promise<boolean> {
   await getServicesInfo(userId);

   const infoUser = JSON.stringify({
      descriptionTech,
      totalPrice,
      state,
      item,
   });

   await redisHistorialServices.set(`ServicesInfoCliente:${userId}`, infoUser);
   return true;
}

// eliminar la información de servicios de un cliente
async function removeServiceInfo(userId: number): Promise<void> {
   await redisHistorialServices.del(`ServicesInfoCliente:${userId}`);
}

export const clienteHistorialServices = {
   getAllServicesInfo,
   getServicesInfo,
   addToServicesInfo,
   removeServiceInfo,
};

export default clienteHistorialServices;