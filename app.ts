import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';

//import admin
import AdministradorRegister from './routes/Administrador/AdministradorRegister'
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import AdministradorUpdate from './routes/Administrador/AdministradorUpdate';
import AdministradorGet from "./routes/Administrador/AdministradorGet";
import AdministradorDelete from "./routes/Administrador/AdministradorDelete";

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';
import CategoriaUpdate from './routes/Categoria/CategoriaUpdate';
import CategoriaDelete from './routes/Categoria/CategoriaDelete';
import CategoriaGet from './routes/Categoria/CategoriaGet';
import CategoriaGetAll from './routes/Categoria/CategoriaGetAll';

//import cliente
import ClienteRegister from './routes/Cliente/ClienteRegister';
import ClienteLogin from "./routes/Cliente/ClienteLogin";
import ClienteChangePassword from './routes/Cliente/ClienteChangePassword';
import ClienteEmail from './routes/Cliente/ClienteEmail';
import ClienteDelete from './routes/Cliente/ClienteDelete';
import ClienteUpdate from "./routes/Cliente/ClienteUpdate";
import ClienteDataUpdate from "./routes/Cliente/ClienteDataUpdate";
import ClienteGet from "./routes/Cliente/ClienteGet";
import ClienteGetAll from "./routes/Cliente/ClienteGetAll";

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';
import ContratoUpdate from './routes/Contrato/ContratoUpdate';
import ContratoDelete from "./routes/Contrato/ContratoDelete";
import ContratoGet from "./routes/Contrato/ContratoGet";  
import ContratoGetAll from "./routes/Contrato/ContratoGetAll";    

//import ia
import Diagnostic from "./routes/IA/Diagnostic";

//import empleado
import EmpleadoRegister from './routes/Empleado/EmpleadoRegister';
import EmpleadoLogin from './routes/Empleado/EmpleadoLogin';
import EmpleadoUpdate from './routes/Empleado/EmpleadoUpdate';
import EmpleadoDataUpdate from './routes/Empleado/EmpleadoDataUpdate';
import EmpleadoDelete from './routes/Empleado/EmpleadoDelete';
import EmpleadoGet from './routes/Empleado/EmpleadoGet';
import EmpleadoGetAll from './routes/Empleado/EmpleadoGetAll';

//import factura
import FacturaRegister from './routes/Factura/FacturaRegister';
import FacturaUpdate from './routes/Factura/FacturaUpdate';
import FacturaGet from './routes/Factura/FacturaGet';
import FacturaGetAll from "./routes/Factura/FacturaGetAll";

//import pedidoProducto
import PedidoProductoRegister from './routes/PedidoProducto/PedidoProductoRegister';

//import pedidoServicio
import PedidoServicioRegister from './routes/PedidoServicio/PedidoServicioRegister';

//import producto
import ProductoRegister from './routes/Producto/ProductoRegister';
import ProductoFilterByName from './routes/Producto/ProductoFilterByName';
import ProductoGet from './routes/Producto/ProductoGet';
import ProductoGetAll from './routes/Producto/ProductoGetAll';
import ProductoGetAllCategoria from './routes/Producto/ProductoGetAllCategoria';
import ProductoDelete from './routes/Producto/ProductoDelete';
import ProductoUpdate from './routes/Producto/ProductoUpdate';
import ProductoUpdateNI from './routes/Producto/ProductoUpdateNI';

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
import TecnicoDataUpdate from './routes/Tecnico/TecnicoDataUpdate';
import TecnicoDataUpdateNI from './routes/Tecnico/TecnicoDataUpdateNI';

import TecnicoDelete from './routes/Tecnico/TecnicoDelete';
import TecnicoGet from './routes/Tecnico/TecnicoGet';
import TecnicoGetAll from './routes/Tecnico/TecnicoGetAll';

//import pago
import PagoPaypal from './routes/Pagos/PagoPaypal'; 
import CapturarPago from './routes/Pagos/CapturarPago';

//import se encuentra
import SeEncuentraRegister from './routes/SeEncuentra/SeEncuentraRegister';
import SeEncuentraUpdate from './routes/SeEncuentra/SeEncuentraUpdate';

//import cart
import CartAdd from './routes/Cart/CartAdd';
import CartGet from './routes/Cart/CartGet';
import CartRemove from './routes/Cart/CartRemove';
import CartClear from './routes/Cart/CartClear';
import CartTotal from './routes/Cart/CartTotal';
import CartUpdateQuantity from './routes/Cart/CartUpdateQuantity';

//import profile
import profile from './routes/profile';

dotenv.config();
const app = express().use(bodyParser.json());

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://red-gas-kevins-projects-666a0731.vercel.app'
  ],
  credentials: true,
}));

//--------------- RUTAS -------------------//

//ADMINISTRADOR
app.use('/AdminRegister', AdministradorRegister);
app.use('/AdminLogin', AdministradorLogin);
app.use('/AdminGet', AdministradorGet);
app.use('/AdminUpdate', AdministradorUpdate);
app.use('/AdminDelete', AdministradorDelete);

//CATEGORIA
app.use('/CategoriaRegister', CategoriaRegister);
app.use('/CategoriaGet', CategoriaGet);
app.use('/CategoriaGetAll', CategoriaGetAll)
app.use('/CategoriaUpdate', CategoriaUpdate);
app.use('/CategoriaDelete', CategoriaDelete);

//CLIENTE
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteLogin', ClienteLogin);
app.use('/ClienteEmail', ClienteEmail);
app.use('/ClienteChangePassword', ClienteChangePassword);
app.use('/ClienteDelete', ClienteDelete);
app.use('/ClienteUpdate', ClienteUpdate);
app.use('/ClienteDataUpdate', ClienteDataUpdate);
app.use('/ClienteGet', ClienteGet);
app.use('/ClienteGetAll', ClienteGetAll);

//CONTRATO
app.use('/ContratoRegister', ContratoRegister);
app.use('/ContratoGet', ContratoGet);
app.use('/ContratoGetAll', ContratoGetAll);
app.use('/ContratoUpdate', ContratoUpdate);
app.use('/ContratoDelete', ContratoDelete);
app.use('/ContratoGet', ContratoGet)
app.use('/ContratoGetAll', ContratoGetAll)

//IA
app.use('/Diagnostic', Diagnostic);

//EMPLEADO
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoLogin', EmpleadoLogin);
app.use('/EmpleadoUpdate', EmpleadoUpdate);
app.use('/EmpleadoDataUpdate', EmpleadoDataUpdate);
app.use('/EmpleadoDelete', EmpleadoDelete);
app.use('/EmpleadoGet', EmpleadoGet);
app.use('/EmpleadoGetAll', EmpleadoGetAll);

//FACTURA
app.use('/FacturaRegister', FacturaRegister);
app.use('/FacturaUpdate', FacturaUpdate);
app.use('/FacturaGet', FacturaGet);
app.use('/FacturaGetAll', FacturaGetAll);


//PEDIDO PRODUCTO
app.use('/PedidoProductoRegister', PedidoProductoRegister);

//PEDIDO SERVICIO
app.use('/PedidoServicioRegister', PedidoServicioRegister);

//PRODUCTO
app.use('/ProductoRegister', ProductoRegister);
app.use('/ProductoGet', ProductoGet);
app.use('/ProductoUpdate', ProductoUpdate);
app.use('/ProductoUpdateNI', ProductoUpdateNI);
app.use('/ProductoDelete', ProductoDelete);
app.use('/ProductoGetAll', ProductoGetAll);
app.use('/ProductoGetAllCategoria', ProductoGetAllCategoria);
app.use('/ProductoFilterByName', ProductoFilterByName);

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
app.use('/TecnicoDataUpdate', TecnicoDataUpdate);
app.use('/TecnicoDataUpdateNI', TecnicoDataUpdateNI);
app.use('/TecnicoDelete', TecnicoDelete);
app.use('/TecnicoGet', TecnicoGet);
app.use('/TecnicoGetAll', TecnicoGetAll);

//PAGO
app.use('/PagoPaypal', PagoPaypal);
app.use('/CapturarPago', CapturarPago);

//SE ENCUENTRA
app.use('/SeEncuentraRegister', SeEncuentraRegister);
app.use('/SeEncuentraUpdate', SeEncuentraUpdate);

//CART
app.use('/CartAdd', CartAdd);
app.use('/CartGet', CartGet);
app.use('/CartUpdateQuantity', CartUpdateQuantity);
app.use('/CartRemove', CartRemove);
app.use('/CartClear', CartClear);
app.use('/CartTotal', CartTotal)

//PROFILE
app.use('/Profile', profile);

//--------------- INICIALIZAR SERVIDOR -------------------//

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
