import { Request, Response } from "express";
import ContratoDataDto from "../../Dto/ContratoDto/ContratoDataDto";
import ContratoServices from "../../services/ContratoServices";

const ContratoDataUpdate = async (req: Request, res: Response) => {
  try {
    // Extraemos los campos que envía el frontend
    const { contrato, id_empleado } = req.body;
    console.log('Body recibido en ContratoDataUpdate:', req.body);
    if (
      !contrato ||
      contrato.fecha_contrato === undefined ||
      contrato.duracion_contrato === undefined ||
      contrato.tipo_contrato === undefined ||
      contrato.salario === undefined ||
      id_empleado === undefined
    ) {
      return res.status(400).json({ status: "error", message: "Todos los campos son obligatorios." });
    }

    // Crear el objeto ContratoDataDto solo con los datos relevantes
    const contratoDto = new ContratoDataDto(
      contrato.fecha_contrato,
      contrato.duracion_contrato,
      contrato.tipo_contrato,
      contrato.salario
    );

    // Llamar al servicio para actualizar por id_empleado
    const [result]: any = await ContratoServices.ContratoDataUpdate(contratoDto, Number(id_empleado));

    if (result.affectedRows === 0) {
      return res.status(404).json({ status: "error", message: "Contrato no encontrado o sin cambios" });
    }

    return res.status(200).json({ status: "success", message: "Actualización exitosa" });
  } catch (error: any) {
    console.error("Error en ContratoDataUpdate:", error);
    return res.status(500).json({
      status: "error",
      message: "Error interno del servidor",
      detalle: error.message,
    });
  }
};

export default ContratoDataUpdate;
