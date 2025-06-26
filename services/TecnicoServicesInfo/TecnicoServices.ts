import e from "express";
import { redisTechnicianServices } from "../../config/redisTechnicianServices";

// obtener información de servicios de un tecnico
async function getServicesInfo(techId: number): Promise<string | null> {
  const data = await redisTechnicianServices.get(`ServicesInfoTecnico:${techId}`);
  return data ?? null;
}

// obtener todos los servicios de los clientes
async function getAllServicesInfo(): Promise<any[]> {
  const keys = await redisTechnicianServices.keys("ServicesInfoTecnico:*");
  const data = await Promise.all(
    keys.map(async (key) => {
      const value = await redisTechnicianServices.get(key);
      const userId = key.split(":")[1];
      return {
        userId,
        ...JSON.parse(value ?? "{}"),
      };
    })
  );

  return data;
}

// agregar información de servicios de un tecnico
async function addToServicesInfo(techId: number, techName: string, techPhone: string, techEmail: string, userid: number ): Promise<boolean> {
  const existing = await getServicesInfo(techId);

  if (existing) {
    return false;
  }

  const infoServices = JSON.stringify({
    techName,
    techPhone,
    techEmail,
    userid,
  });

  await redisTechnicianServices.set(`ServicesInfoTecnico:${techId}`, infoServices);
  return true;
}

// eliminar la información de servicios de un cliente
async function removeServiceInfo(techId: number): Promise<void> {
  await redisTechnicianServices.del(`ServicesInfoTecnico:${techId}`);
}

export const tecnicoServices = {
  getServicesInfo,
  getAllServicesInfo,
  addToServicesInfo,
  removeServiceInfo,
};

export default tecnicoServices;