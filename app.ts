import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

//import cliente
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteGet from './routes/Cliente/ClienteGet';
import ClienteLogin from "./routes/Cliente/ClienteLogin";

//import producto
import ProductoRegister from './routes/Producto/ProductoRegister';

// import servicio
import ServicioRegister from './routes/Servicio/ServicioRegister';

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';

//import pedido
import PedidoRegister from './routes/Pedido/PedidoRegister';

//import factura
import FacturaRegister from './routes/Factura/FacturaRegister';

//import empleado
import EmpleadoRegister from './routes/Empleado/EmpleadoRegister';
import EmpleadoLogin from './routes/Empleado/EmpleadoLogin';

//import tecnico
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'

import profile from './routes/profile';


dotenv.config();
const app = express().use(bodyParser.json());

//rutas cliente
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteGet', ClienteGet)
app.use('/ClienteLogin', ClienteLogin);

//rutas producto
app.use('/ProductoRegister', ProductoRegister)

//rutas servicio
app.use('/ServicioRegister', ServicioRegister);

//rutas contrato
app.use('/ContratoRegister', ContratoRegister);

//rutas categoria
app.use('/CategoriaRegister', CategoriaRegister);

//rutas pedido
app.use('/PedidoRegister', PedidoRegister);

//rutas factura
app.use('/FacturaRegister', FacturaRegister);

//rutas empleado
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoLogin', EmpleadoLogin);

//rutas tecnico
app.use('/TecnicoRegister', TecnicoRegister);
app.use('/TecnicoLogin', TecnicoLogin);

app.use('/profile', profile);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
