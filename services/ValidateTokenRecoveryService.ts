import jwt from "jsonwebtoken";

const SECRET = process.env.KEY_RECOVERY || "clave_temporal";

const ValidateTokenRecoveryService = {
  validate: async (token: string): Promise<{ valido: boolean; correo?: string }> => {
    try {
      const decoded = jwt.verify(token, SECRET) as any;

      if (!decoded?.data?.correo) return { valido: false };

      return { valido: true, correo: decoded.data.correo };
    } catch (err) {
      return { valido: false };
    }
  },
};

export default ValidateTokenRecoveryService;
