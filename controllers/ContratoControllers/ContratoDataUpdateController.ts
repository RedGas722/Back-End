import { Request, Response } from "express";
import ContratoDataDto from "../../Dto/ContratoDto/ContratoDataDto";
import ContratoServices from "../../services/ContratoServices";

const ContratoDataUpdate = async (req: Request, res: Response) => {
  try {
    // Extraemos los campos que envía el frontend
    const {
      id_empleado,
      fecha_contrato,
      duracion_contrato,
      tipo_contrato,
      salario
    } = req.body;

    if (!id_empleado) {
      return res.status(400).json({ error: "El id_empleado es obligatorio para actualizar." });
    }

    // Crear el objeto ContratoDataDto solo con los datos relevantes
    const contrato = new ContratoDataDto(
      fecha_contrato,
      duracion_contrato,
      tipo_contrato,
      salario
    );

    // Llamar al servicio para actualizar por id_empleado
    const [result]: any = await ContratoServices.ContratoDataUpdate(contrato, Number(id_empleado));

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Contrato no encontrado o sin cambios" });
    }

    return res.status(200).json({ status: "Actualización exitosa" });
  } catch (error: any) {
    console.error("Error en ContratoDataUpdate:", error);
    return res.status(500).json({
      error: "Error interno del servidor",
      detalle: error.message,
    });
  }
};

export default ContratoDataUpdate;
