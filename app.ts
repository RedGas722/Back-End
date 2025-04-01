import express from "express";
import bodyParser from 'body-parser';
import register from './routes/register';
import auth from './routes/auth';
import profile from './routes/profile';
import EmpleadoRegister from './routes/Empleado/EmpleadoRegister';
import EmpleadoLogin from './routes/Empleado/EmpleadoLogin';
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/profile', profile);
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoLogin', EmpleadoLogin);
app.use('/TecnicoLogin', TecnicoLogin);
app.use('/TecnicoRegister', TecnicoRegister);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
