import profile from './routes/profile';
import bodyParser from 'body-parser';
import express from "express";
import dotenv from "dotenv";

// CLIENTE
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";

// ADMINISTRADOR
import AdministradorRegister from './controllers/AdministradorControllers/AdministradorRegisterController';
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import AdministradorUpdate from './routes/Administrador/AdministradorUpdate';

dotenv.config();


const app = express().use(bodyParser.json());

// CLIENTE
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);

app.use('/profile', profile);

// ADMINISTRADOR
app.use('/AdministradorRegister', AdministradorRegister);
app.use('/AdministradorLogin', AdministradorLogin);
app.use('/AdministradorUpdate', AdministradorUpdate);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
