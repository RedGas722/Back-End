import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

//import cliente
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";
import ClienteDelete from './routes/Cliente/ClienteDelete';
import ClienteUpdate from "./routes/Cliente/ClienteUpdate";
import ClienteGet from "./routes/Cliente/ClienteGet";
import ClienteGetAll from "./routes/Cliente/ClienteGetAll";

//import producto
import ProductoRegister from './routes/Producto/ProductoRegister';
import ProductoGet from './routes/Producto/ProductoGet';
import ProductoDelete from './routes/Producto/ProductoDelete';
import ProductoGetAll from './routes/Producto/ProductoGetAll';

// import servicio
import ServicioRegister from './routes/Servicio/ServicioRegister';
import ServicioDelete from './routes/Servicio/ServicioDelete';
import ServicioGet from './routes/Servicio/ServicioGet';
import ServicioGetAll from './routes/Servicio/ServicioGetAll';

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';
import ContratoDelete from "./routes/Contrato/ContratoDelete";

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';

//import carritoProducto
import CarritoProductoRegister from './routes/CarritoProducto/CarritoProductoRegister';

//import carritoServicio
import CarritoServicioRegister from './routes/CarritoServicio/CarritoServicioRegister';

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
import EmpleadoGet from "./routes/Empleado/EmpleadoGet";
import EmpleadogetAll from "./routes/Empleado/EmpleadoGetAll"

//import tecnico
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoDelete from './routes/Tecnico/TecnicoDelete';

//import admin
import AdministradorRegister from './routes/Administrador/AdministradorRegister'
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import AdministradorDelete from "./routes/Administrador/AdministradorDelete";
import AdministradorGet from "./routes/Administrador/AdministradorGet"

//import profile
import profile from './routes/profile';

dotenv.config();
const app = express().use(bodyParser.json());

//rutas cliente
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);
app.use('/CLienteDelete', ClienteDelete);
app.use('/ClienteUpdate', ClienteUpdate);
app.use('/ClienteGet', ClienteGet);
app.use('/ClienteGetAll', ClienteGetAll);
//rutas producto
app.use('/ProductoRegister', ProductoRegister);
app.use('/ProductoGet', ProductoGet);
app.use('/ProductoDelete', ProductoDelete);
app.use('/ProductoGetAll', ProductoGetAll);

//rutas servicio
app.use('/ServicioRegister', ServicioRegister);
app.use('/ServicioDelete', ServicioDelete);
app.use('/ServicioGet', ServicioGet);
app.use('/ServicioGetAll', ServicioGetAll);

//rutas contrato
app.use('/ContratoRegister', ContratoRegister);
app.use('/ContratoDelete', ContratoDelete);

//rutas categoria
app.use('/CategoriaRegister', CategoriaRegister);

//rutas carritoProducto
app.use('/CarritoProductoRegister', CarritoProductoRegister);

//rutas carritoServicio
app.use('/CarritoServicioRegister', CarritoServicioRegister);

//rutas pedidoProducto
app.use('/PedidoProductoRegister', PedidoProductoRegister);

//rutas pedidoServicio
app.use('/PedidoServicioRegister', PedidoServicioRegister);

//rutas factura
app.use('/FacturaRegister', FacturaRegister);

//rutas empleado
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoLogin', EmpleadoLogin);
app.use('/EmpleadoDelete', EmpleadoDelete);
app.use('/EmpleadoGet', EmpleadoGet);
app.use('/EmpleadoGetAll', EmpleadogetAll)

//rutas tecnico
app.use('/TecnicoRegister', TecnicoRegister);
app.use('/TecnicoLogin', TecnicoLogin);
app.use('/TecnicoDelete', TecnicoDelete);

//rutas admin
app.use('/AdminRegister', AdministradorRegister);
app.use('/AdminLogin', AdministradorLogin);
app.use('/AdminDelete', AdministradorDelete);
app.use('/AdminGet', AdministradorGet)

app.use('/Profile', profile);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
