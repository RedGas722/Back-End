import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';

//import admin
import AdministradorRegister from './routes/Administrador/AdministradorRegister'
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import AdministradorUpdate from './routes/Administrador/AdministradorUpdate';
import AdministradorDelete from "./routes/Administrador/AdministradorDelete";

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';
import CategoriaUpdate from './routes/Categoria/CategoriaUpdate';

//import cliente
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";
import ClienteChangePassword from './routes/Cliente/ClienteChangePassword';
import ClienteDelete from './routes/Cliente/ClienteDelete';
import ClienteUpdate from "./routes/Cliente/ClienteUpdate";
import ClienteGet from "./routes/Cliente/ClienteGet";
import ClienteGetAll from "./routes/Cliente/ClienteGetAll";

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';
import ContratoUpdate from './routes/Contrato/ContratoUpdate';
import ContratoDelete from "./routes/Contrato/ContratoDelete";
import ContratoGet from "./routes/Contrato/ContratoGet";  
import ContratoGetAll from "./routes/Contrato/ContratoGetAll";    

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
import ProductoGetAll from './routes/Producto/ProductoGetAll';
import ProductoDelete from './routes/Producto/ProductoDelete';
import ProductoUpdate from './routes/Producto/ProductoUpdate';

// import servicio
import ServicioRegister from './routes/Servicio/ServicioRegister';
import ServicioGet from './routes/Servicio/ServicioGet';
import ServicioGetAll from './routes/Servicio/ServicioGetAll';
import ServicioUpdate from './routes/Servicio/ServicioUpdate';
import ServicioDelete from './routes/Servicio/ServicioDelete';

//import tecnico
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoUpdate from './routes/Tecnico/TecnicoUpdate';
import TecnicoDelete from './routes/Tecnico/TecnicoDelete';

//import profile
import profile from './routes/profile';


dotenv.config();
const app = express().use(bodyParser.json());

app.use(cors({origin: 'http://localhost:5173', credentials: true,}));

//--------------- RUTAS -------------------//

//ADMINISTRADOR
app.use('/AdminRegister', AdministradorRegister);
app.use('/AdminLogin', AdministradorLogin);
app.use('/AdminUpdate', AdministradorUpdate);
app.use('/AdminDelete', AdministradorDelete);

//CATEGORIA
app.use('/CategoriaRegister', CategoriaRegister);
app.use('/CategoriaUpdate', CategoriaUpdate);

//CLIENTE
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);
app.use('/ClienteChangePassword', ClienteChangePassword);
app.use('/CLienteDelete', ClienteDelete);
app.use('/ClienteUpdate', ClienteUpdate);
app.use('/ClienteGet', ClienteGet);
app.use('/ClienteGetAll', ClienteGetAll);

//CONTRATO
app.use('/ContratoRegister', ContratoRegister);
app.use('/ContratoGet', ContratoGet);
app.use('/ContratoGetAll', ContratoGetAll);
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
app.use('/ProductoGetAll', ProductoGetAll);

//SERVICIO
app.use('/ServicioRegister', ServicioRegister);
app.use('/ServicioUpdate', ServicioUpdate);
app.use('/ServicioDelete', ServicioDelete);
app.use('/ServicioGet', ServicioGet);
app.use('/ServicioGetAll', ServicioGetAll);

//TECNICO
app.use('/TecnicoRegister', TecnicoRegister);
app.use('/TecnicoLogin', TecnicoLogin);
app.use('/TecnicoUpdate', TecnicoUpdate);
app.use('/TecnicoDelete', TecnicoDelete);

app.use('/Profile', profile);


//--------------- INICIALIZAR SERVIDOR -------------------//

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
