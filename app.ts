import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";


//import admin
import AdministradorRegister from './routes/Administrador/AdministradorRegister'
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import AdministradorUpdate from './routes/Administrador/AdministradorUpdate';
import AdministradorDelete from "./routes/Administrador/AdministradorDelete";

//import carritoProducto
import CarritoProductoRegister from './routes/CarritoProducto/CarritoProductoRegister';

//import carritoServicio
import CarritoServicioRegister from './routes/CarritoServicio/CarritoServicioRegister';

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';
import CategoriaUpdate from './routes/Categoria/CategoriaUpdate';

//import cliente
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";
import ClienteDelete from './routes/Cliente/ClienteDelete';
import ClienteUpdate from "./routes/Cliente/ClienteUpdate";

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';
import ContratoUpdate from './routes/Contrato/ContratoUpdate';
import ContratoDelete from "./routes/Contrato/ContratoDelete";

//import empleado
import EmpleadoRegister from './routes/Empleado/EmpleadoRegister';
import EmpleadoLogin from './routes/Empleado/EmpleadoLogin';
import EmpleadoUpdate from './routes/Empleado/EmpleadoUpdate';
import EmpleadoDelete from './routes/Empleado/EmpleadoDelete';

//import factura
import FacturaRegister from './routes/Factura/FacturaRegister';
import FacturaUpdate from './routes/Factura/FacturaUpdate';

//import pedidoProducto
import PedidoProductoRegister from './routes/PedidoProducto/PedidoProductoRegister';

//import pedidoServicio
import PedidoServicioRegister from './routes/PedidoServicio/PedidoServicioRegister';

//import producto
import ProductoRegister from './routes/Producto/ProductoRegister';
import ProductoGet from './routes/Producto/ProductoGet';
import ProductoDelete from './routes/Producto/ProductoDelete';
import ProductoUpdate from './routes/Producto/ProductoUpdate';

// import servicio
import ServicioRegister from './routes/Servicio/ServicioRegister';
import ServicioDelete from './routes/Servicio/ServicioDelete';

//import tecnico
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoDelete from './routes/Tecnico/TecnicoDelete';

//import profile
import profile from './routes/profile';

dotenv.config();
const app = express().use(bodyParser.json());

//--------------- RUTAS -------------------//

//ADMINISTRADOR
app.use('/AdminRegister', AdministradorRegister);
app.use('/AdminLogin', AdministradorLogin);
app.use('/AdminUpdate', AdministradorUpdate);
app.use('/AdminDelete', AdministradorDelete);

//CARRITO PRODUCTO
app.use('/CarritoProductoRegister', CarritoProductoRegister);

//CARRITO SERVICIO
app.use('/CarritoServicioRegister', CarritoServicioRegister);

//CATEGORIA
app.use('/CategoriaRegister', CategoriaRegister);
app.use('/CategoriaUpdate', CategoriaUpdate);

//CLIENTE
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);
app.use('/CLienteDelete', ClienteDelete);
app.use('/ClienteUpdate', ClienteUpdate);

//CONTRATO
app.use('/ContratoRegister', ContratoRegister);
app.use('/ContratoUpdate', ContratoUpdate);
app.use('/ContratoDelete', ContratoDelete);

//EMPLEADO
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoLogin', EmpleadoLogin);
app.use('/EmpleadoUpdate', EmpleadoUpdate);
app.use('/EmpleadoDelete', EmpleadoDelete);

//FACTURA
app.use('/FacturaRegister', FacturaRegister);
app.use('/FacturaUpdate', FacturaUpdate);

//PEDIDO PRODUCTO
app.use('/PedidoProductoRegister', PedidoProductoRegister);

//PEDIDO SERVICIO
app.use('/PedidoServicioRegister', PedidoServicioRegister);

//PRODUCTO
app.use('/ProductoRegister', ProductoRegister);
app.use('/ProductoGet', ProductoGet);
app.use('/ProductoUpdate', ProductoUpdate);
app.use('/ProductoDelete', ProductoDelete);

//SERVICIO
app.use('/ServicioRegister', ServicioRegister);
app.use('/ServicioDelete', ServicioDelete);

//TECNICO
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
