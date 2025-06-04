import e from "express";
import { redisServices } from "../../config/redisServices";

async function getServicesInfo(userId: number): Promise<string | null> {
  const data = await redisServices.get(`ServicesInfoCliente:${userId}`);
  return data ?? null;
}

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

async function removeServiceInfo(userId: number): Promise<void> {
  await redisServices.del(`ServicesInfoCliente:${userId}`);
}

export const clienteServices = {
  getServicesInfo,
  addToServicesInfo,
  removeServiceInfo,
};

export default clienteServices;