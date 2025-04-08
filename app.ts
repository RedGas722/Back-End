import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

//import cliente
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";
import ClienteDelete from './routes/Cliente/ClienteDelete';

//import producto
import ProductoRegister from './routes/Producto/ProductoRegister';
import ProductoGet from './routes/Producto/ProductoGet';

// import servicio
import ServicioRegister from './routes/Servicio/ServicioRegister';

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';

//import pedidoProducto
import PedidoProductoRegister from './routes/PedidoProducto/PedidoProductoRegister';

//import pedidoServicio
import PedidoServicioRegister from './routes/PedidoServicio/PedidoServicioRegister';

//import factura
import FacturaRegister from './routes/Factura/FacturaRegister';

//import empleado
import EmpleadoRegister from './routes/Empleado/EmpleadoRegister';
import EmpleadoLogin from './routes/Empleado/EmpleadoLogin';
import EmpleadoDelete from './routes/Empleado/EmpleadoDelete';

//import tecnico
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoDelete from './routes/Tecnico/TecnicoDelete';

import profile from './routes/profile';


dotenv.config();
const app = express().use(bodyParser.json());

//rutas cliente
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);
app.use('/CLienteDelete', ClienteDelete)

//rutas producto
app.use('/ProductoRegister', ProductoRegister)
app.use('/ProductoGet', ProductoGet)

//rutas servicio
app.use('/ServicioRegister', ServicioRegister);

//rutas contrato
app.use('/ContratoRegister', ContratoRegister);

//rutas categoria
app.use('/CategoriaRegister', CategoriaRegister);

//rutas pedidoProducto
app.use('/PedidoProductoRegister', PedidoProductoRegister);

//rutas pedidoServicio
app.use('/PedidoServicioRegister', PedidoServicioRegister);

//rutas factura
app.use('/FacturaRegister', FacturaRegister);

//rutas empleado
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoLogin', EmpleadoLogin);
app.use('/EmpleadoDelete', EmpleadoDelete)

//rutas tecnico
app.use('/TecnicoRegister', TecnicoRegister);
app.use('/TecnicoLogin', TecnicoLogin);
app.use('/TecnicoDelete', TecnicoDelete);

app.use('/Profile', profile);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

