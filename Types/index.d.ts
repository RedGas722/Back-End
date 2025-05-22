import { ClientePayload } from "../clientePayload";

declare global {
  namespace Express {
    interface Request {
      user?: ClientePayload;
    }
  }
}
