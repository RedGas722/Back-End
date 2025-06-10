import { Request, Response } from "express";
import Contrato from "../../Dto/ContratoDto/ContratoDto";
import ContratoServices from "../../services/ContratoServices";

const ContratoUpdate = async (req: Request, res: Response) => {
  try {
    const {
      id_contrato,
      fecha_contrato,
      duracion_contrato,
      tipo_contrato,
      salario,
      id_admin,
      id_empleado,
    } = req.body;
;
  
    const contrato = new Contrato(
      fecha_contrato,
      duracion_contrato,
      tipo_contrato,
      salario,
      id_admin,
      id_empleado
    );

    const [result]: any = await ContratoServices.ContratoUpdate(contrato, Number(id_contrato));

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Contrato no encontrado o sin cambios" });
    }

    return res.status(200).json({ status: "Actualización exitosa" });
  } catch (error: any) {
    console.error("Error en ContratoUpdate:", error);
    return res.status(500).json({
      error: "Error interno del servidor",
      detalle: error.message,
    });
  }
};

export default ContratoUpdate;
