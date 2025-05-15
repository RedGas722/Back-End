import * as express from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: number;
      name: string;
      email: string;
      telefono?: string;
      direccion?: string;
    };
  }
}
