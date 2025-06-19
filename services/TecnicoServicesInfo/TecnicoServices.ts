import e from "express";
import { redisTechnicianServices } from "../../config/redisTechnicianServices";

// obtener información de servicios de un tecnico
async function getServicesInfo(techId: number): Promise<string | null> {
  const data = await redisTechnicianServices.get(`ServicesInfoTecnico:${techId}`);
  return data ?? null;
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

// // eliminar la información de servicios de un cliente
// async function removeServiceInfo(userId: number): Promise<void> {
//   await redisTechnicianServices.del(`ServicesInfoCliente:${Id}`);
// }

export const tecnicoServices = {
  getServicesInfo,
  addToServicesInfo,
//   removeServiceInfo,
};

export default tecnicoServices;