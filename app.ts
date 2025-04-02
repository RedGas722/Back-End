import AdministradorRegister from "./controllers/AdministradorControllers/AdministradorRegisterController";
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import express from "express";
import bodyParser from 'body-parser';
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";
import profile from './routes/profile';
import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

// CLIENTE
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);

app.use('/profile', profile);

// ADMINISTRADOR
app.use('/AdministradorRegister', AdministradorRegister);
app.use('/AdministradorLogin', AdministradorLogin);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
