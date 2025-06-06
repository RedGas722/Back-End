import e from "express";
import { redisServices } from "../../config/redisServices";

// obtener información de servicios de un cliente
async function getServicesInfo(userId: number): Promise<string | null> {
  const data = await redisServices.get(`ServicesInfoCliente:${userId}`);
  return data ?? null;
}

// obtener todos los servicios de los clientes
async function getAllServicesInfo(): Promise<any[]> {
  const keys = await redisServices.keys("ServicesInfoCliente:*");
  const data = await Promise.all(
    keys.map(async (key) => {
      const value = await redisServices.get(key);
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
async function addToServicesInfo(userId: number, userName: string, userPhone: string, userAddress: string, item: string): Promise<boolean> {
  const existing = await getServicesInfo(userId);

  if (existing) {
    return false;
  }

  const infoUser = JSON.stringify({
    userName,
    userPhone,
    userAddress,
    item,
  });

  await redisServices.set(`ServicesInfoCliente:${userId}`, infoUser);
  return true;
}

// eliminar la información de servicios de un cliente
async function removeServiceInfo(userId: number): Promise<void> {
  await redisServices.del(`ServicesInfoCliente:${userId}`);
}

export const clienteServices = {
  getAllServicesInfo,
  getServicesInfo,
  addToServicesInfo,
  removeServiceInfo,
};

export default clienteServices;