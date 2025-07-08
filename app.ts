import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import cors from 'cors';

//import admin
import AdministradorRegister from './routes/Administrador/AdministradorRegister'
import AdministradorLogin from './routes/Administrador/AdministradorLogin';
import AdministradorUpdate from './routes/Administrador/AdministradorUpdate';
import AdministradorDataUpdate from './routes/Administrador/AdministradorDataUpdate'
import AdministradorGet from "./routes/Administrador/AdministradorGet";
import AdministradorGetAll from "./routes/Administrador/AdministradorGetAll";
import AdministradorDelete from "./routes/Administrador/AdministradorDelete";
import AdministradorGetAllPaginated from "./routes/Administrador/AdministradorGetAllPaginated";
import AdministradorGetAllEmails from "./routes/Administrador/AdministradorGetAllEmails";
import AdministradorEmail from "./routes/Administrador/AdminEmail";
import AdministradorChangePassword from './routes/Administrador/AdministradorChangePassword';

//import cart
import CartAdd from './routes/Cart/CartAdd';
import CartGet from './routes/Cart/CartGet';
import CartRemove from './routes/Cart/CartRemove';
import CartClear from './routes/Cart/CartClear';
import CartTotal from './routes/Cart/CartTotal';
import CartUpdateQuantity from './routes/Cart/CartUpdateQuantity';
import CartGetByEmail from './routes/Cart/CartGetByEmail';
import CartClearByEmail from './routes/Cart/CartClearByEmail';

//import categoria
import CategoriaRegister from './routes/Categoria/CategoriaRegister';
import CategoriaUpdate from './routes/Categoria/CategoriaUpdate';
import CategoriaDelete from './routes/Categoria/CategoriaDelete';
import CategoriaGet from './routes/Categoria/CategoriaGet';
import CategoriaGetAll from './routes/Categoria/CategoriaGetAll';
import CategoriaGetAllPaginated from './routes/Categoria/CategoriaGetAllPaginated';
import CategoriaGetAllNames from './routes/Categoria/CategoriaGetAllNames';

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
import ClienteGetAllPaginated from "./routes/Cliente/ClienteGetAllPaginated";
import ClienteGetAllEmails from "./routes/Cliente/ClienteGetAllEmails";

//import cliente servicios
import ClienteServicesGet from "./routes/ClienteServices/ClienteServicesGet";
import ClienteServicesAdd from "./routes/ClienteServices/ClienteServicesAdd";
import ClienteServicesGetAll from "./routes/ClienteServices/ClienteServicesGetAll";
import ClienteServicesDelete from "./routes/ClienteServices/ClienteServicesDelete";

//import contrato
import ContratoRegister from './routes/Contrato/ContratoRegister';
import ContratoUpdate from './routes/Contrato/ContratoUpdate';
import ContratoDataUpdate from './routes/Contrato/ContratoDataUpdate';
import ContratoDelete from "./routes/Contrato/ContratoDelete";
import ContratoGet from "./routes/Contrato/ContratoGet";  
import ContratoGetAll from "./routes/Contrato/ContratoGetAll";    
import ContratoGetAllPaginated from "./routes/Contrato/ContratoGetAllPaginated";

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
import EmpleadoGetAllPaginated from './routes/Empleado/EmpleadoGetAllPaginated';
import EmpleadoGetAllEmails from './routes/Empleado/EmpleadoGetAllEmails';
import EmpleadoEmail from './routes/Empleado/EmpleadoEmail';
import EmpleadoChangePassword from './routes/Empleado/EmpleadoChangePassword';

//import factura
import FacturaRegister from './routes/Factura/FacturaRegister';
import FacturaUpdate from './routes/Factura/FacturaUpdate';
import FacturaGet from './routes/Factura/FacturaGet';
import FacturaGetAll from "./routes/Factura/FacturaGetAll";
import FacturaGetAllPaginated from "./routes/Factura/FacturaGetAllPaginated";
import FacturaGetByClient from './routes/Factura/FacturaGetByClient';

//import pedidoProducto
import PedidoProductoRegister from './routes/PedidoProducto/PedidoProductoRegister';
import PedidoProductoGet from './routes/PedidoProducto/PedidoProductoGet';
import PedidoProductoGetAll from './routes/PedidoProducto/PedidoProductoGetAll';
import PedidoProductoGetAllPaginated from './routes/PedidoProducto/PedidoProductoGetAllPaginated';

//import pedidoServicio
import PedidoServicioRegister from './routes/PedidoServicio/PedidoServicioRegister';
import PedidoServicioGet from './routes/PedidoServicio/PedidoServicioGet';
import PedidoServicioGetAll from './routes/PedidoServicio/PedidoServicioGetAll';
import PedidoServicioGetAllPaginated from './routes/PedidoServicio/PedidoServicioGetAllPaginated';

//import producto
import ProductoRegister from './routes/Producto/ProductoRegister';
import ProductoGetById from './routes/Producto/ProductoGetById';
import ProductoGet from './routes/Producto/ProductoGet';
import ProductoGetAll from './routes/Producto/ProductoGetAll';
import ProductoGetAllCategoria from './routes/Producto/ProductoGetAllCategoria';
import ProductoGetAllPaginated from './routes/Producto/ProductoGetAllPaginated';
import ProductoDelete from './routes/Producto/ProductoDelete';
import ProductoUpdate from './routes/Producto/ProductoUpdate';
import ProductoUpdateNI from './routes/Producto/ProductoUpdateNI';
import ProductoUpdateStock from './routes/Producto/ProductoUpdateStock'
import { iniciarTareaDescuentos } from "./controllers/ProductoControllers/ProductoRDController";
import ProductoGetAllNames from "./routes/Producto/ProductoGetAllNames";
import ProductoGetPartialName from "./routes/Producto/ProductoGetPartialName";

//import tecnico
import TecnicoRegister from './routes/Tecnico/TecnicoRegister'
import TecnicoLogin from './routes/Tecnico/TecnicoLogin';
import TecnicoUpdate from './routes/Tecnico/TecnicoUpdate';
import TecnicoDataUpdate from './routes/Tecnico/TecnicoDataUpdate';
import TecnicoDataUpdateNI from './routes/Tecnico/TecnicoDataUpdateNI';
import TecnicoDelete from './routes/Tecnico/TecnicoDelete';
import TecnicoGet from './routes/Tecnico/TecnicoGet';
import TecnicoGetAll from './routes/Tecnico/TecnicoGetAll';
import TecnicoGetAllPaginated from './routes/Tecnico/TecnicoGetAllPaginated';
import TecnicoGetAllEmails from './routes/Tecnico/TecnicoGetAllEmails';
import TecnicoEmail from './routes/Tecnico/TecnicoEmail';
import TecnicoChangePassword from './routes/Tecnico/TecnicoChangePassword';

//import tecnico servicios
import TecnicoServicesAdd from "./routes/TecnicoServices/TecnicoServicesAdd";
import TecnicoServicesGet from "./routes/TecnicoServices/TecnicoServicesGet";
import TecnicoServicesGetAll from "./routes/TecnicoServices/TecnicoServicesGetAll";
import TecnicoServicesDelete from "./routes/TecnicoServices/TecnicoServicesDelete";

//import pago
import PagoPaypal from './routes/Pagos/PagoPaypal'; 
import CapturarPago from './routes/Pagos/CapturarPagoPayPal';
import PagoMP from './routes/Pagos/PagoMP'; 
import CapturarPagoMP from './routes/Pagos/CapturarPagoMP';
import WebhookMPRoute from './routes/Pagos/WebHookMP';
import WebHookPayPal from './routes/Pagos/WebHookPayPal';

//import se encuentra
import SeEncuentraRegister from './routes/SeEncuentra/SeEncuentraRegister';
import SeEncuentraDelete from './routes/SeEncuentra/SeEncuentraDelete';
import SeEncuentraGet from './routes/SeEncuentra/SeEncuentraGet';
import SeEncuentraUpdate from './routes/SeEncuentra/SeEncuentraUpdate';

//import profile
import profile from './routes/profile';

//import
import RefreshToken from './routes/Token/TokenRefresh';
import GenerateTokenRecovery from './routes/Token/GenerateTokenRecovery';
import ValidateTokenRecovery from './routes/Token/ValidateTokenRecovery';

dotenv.config();
const app = express();
app.use(bodyParser.json()); 

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://redgas-one.vercel.app'
  ],
  credentials: true,
}));

//--------------- RUTAS -------------------//

//ADMINISTRADOR
app.use('/AdminGet', AdministradorGet);
app.use('/AdminGetAll', AdministradorGetAll);
app.use('/AdminLogin', AdministradorLogin);
app.use('/AdminUpdate', AdministradorUpdate);
app.use('/AdminDataUpdate', AdministradorDataUpdate)
app.use('/AdminDelete', AdministradorDelete);
app.use('/AdminRegister', AdministradorRegister);
app.use('/AdminGetAllPaginated', AdministradorGetAllPaginated);
app.use('/AdminGetAllEmails', AdministradorGetAllEmails);
app.use('/AdminEmail', AdministradorEmail);
app.use('/AdminChangePassword', AdministradorChangePassword);

//CART
app.use('/CartAdd', CartAdd);
app.use('/CartGet', CartGet);
app.use('/CartClear', CartClear);
app.use('/CartTotal', CartTotal);
app.use('/CartRemove', CartRemove);
app.use('/CartUpdateQuantity', CartUpdateQuantity);

//CATEGORIA
app.use('/CategoriaGet', CategoriaGet);
app.use('/CategoriaGetAll', CategoriaGetAll)
app.use('/CategoriaUpdate', CategoriaUpdate);
app.use('/CategoriaDelete', CategoriaDelete);
app.use('/CategoriaRegister', CategoriaRegister);
app.use('/CategoriaGetAllPaginated', CategoriaGetAllPaginated);
app.use('/CategoriaGetAllNames', CategoriaGetAllNames);

//CLIENTE
app.use('/ClienteGet', ClienteGet);
app.use('/ClienteLogin', ClienteLogin);
app.use('/ClienteEmail', ClienteEmail);
app.use('/ClienteDelete', ClienteDelete);
app.use('/ClienteUpdate', ClienteUpdate);
app.use('/ClienteGetAll', ClienteGetAll);
app.use('/ClienteGetAllPaginated', ClienteGetAllPaginated);
app.use('/ClienteRegister', ClienteRegister);
app.use('/ClienteDataUpdate', ClienteDataUpdate);
app.use('/ClienteChangePassword', ClienteChangePassword);
app.use('/ClienteGetAllEmails', ClienteGetAllEmails);

//CLIENTE SERVIVICIOS
app.use('/ClienteServicesGet', ClienteServicesGet);
app.use('/ClienteServicesAdd', ClienteServicesAdd);
app.use('/ClienteServicesGetAll', ClienteServicesGetAll);
app.use('/ClienteServicesDelete', ClienteServicesDelete);

//CONTRATO
app.use('/ContratoGet', ContratoGet);
app.use('/ContratoGetAll', ContratoGetAll);
app.use('/ContratoUpdate', ContratoUpdate);
app.use('/ContratoDataUpdate', ContratoDataUpdate);
app.use('/ContratoDelete', ContratoDelete);
app.use('/ContratoRegister', ContratoRegister);
app.use('/ContratoGetAllPaginated', ContratoGetAllPaginated);

//IA
app.use('/Diagnostic', Diagnostic);

//EMPLEADO
app.use('/EmpleadoGet', EmpleadoGet);
app.use('/EmpleadoLogin', EmpleadoLogin);
app.use('/EmpleadoUpdate', EmpleadoUpdate);
app.use('/EmpleadoGetAll', EmpleadoGetAll);
app.use('/EmpleadoDelete', EmpleadoDelete);
app.use('/EmpleadoRegister', EmpleadoRegister);
app.use('/EmpleadoDataUpdate', EmpleadoDataUpdate);
app.use('/EmpleadoGetAllPaginated', EmpleadoGetAllPaginated);
app.use('/EmpleadoGetAllEmails', EmpleadoGetAllEmails);
app.use('/EmpleadoEmail', EmpleadoEmail);
app.use('/EmpleadoChangePassword', EmpleadoChangePassword);

//FACTURA
app.use('/FacturaGet', FacturaGet);
app.use('/FacturaGetByClient', FacturaGetByClient);
app.use('/FacturaUpdate', FacturaUpdate);
app.use('/FacturaGetAll', FacturaGetAll);
app.use('/FacturaRegister', FacturaRegister);
app.use('/FacturaGetAllPaginated', FacturaGetAllPaginated);

//PEDIDO PRODUCTO
app.use('/PedidoProductoRegister', PedidoProductoRegister);
app.use('/PedidoProductoGet', PedidoProductoGet);
app.use('/PedidoProductoGetAll', PedidoProductoGetAll);
app.use('/PedidoProductoGetAllPaginated', PedidoProductoGetAllPaginated);

//PEDIDO SERVICIO
app.use('/PedidoServicioRegister', PedidoServicioRegister);
app.use('/PedidoServicioGet', PedidoServicioGet);
app.use('/PedidoServicioGetAll', PedidoServicioGetAll);
app.use('/PedidoServicioGetAllPaginated', PedidoServicioGetAllPaginated);

//PRODUCTO
app.use('/ProductoGet', ProductoGet);
app.use('/ProductoGetAll', ProductoGetAll);
app.use('/ProductoUpdate', ProductoUpdate);
app.use('/ProductoDelete', ProductoDelete);
app.use('/ProductoRegister', ProductoRegister);
app.use('/ProductoUpdateNI', ProductoUpdateNI);
app.use('/ProductoUpdateStock', ProductoUpdateStock);
app.use('/ProductoGetAllCategoria', ProductoGetAllCategoria);
app.use('/ProductoGetAllPaginated', ProductoGetAllPaginated);
app.use('/ProductoGetById', ProductoGetById);
app.use('/ProductoGetAllNames', ProductoGetAllNames);
app.use('/ProductoGetPartialName', ProductoGetPartialName);

//TECNICO
app.use('/TecnicoGet', TecnicoGet);
app.use('/TecnicoLogin', TecnicoLogin);
app.use('/TecnicoUpdate', TecnicoUpdate);
app.use('/TecnicoDelete', TecnicoDelete);
app.use('/TecnicoGetAll', TecnicoGetAll);
app.use('/TecnicoRegister', TecnicoRegister);
app.use('/TecnicoDataUpdate', TecnicoDataUpdate);
app.use('/TecnicoDataUpdateNI', TecnicoDataUpdateNI);
app.use('/TecnicoGetAllPaginated', TecnicoGetAllPaginated);
app.use('/TecnicoGetAllEmails', TecnicoGetAllEmails);
app.use('/TecnicoEmail', TecnicoEmail);
app.use('/TecnicoChangePassword', TecnicoChangePassword);

//TECNICO SERVIVICIOS
app.use('/TecnicoServicesGet', TecnicoServicesGet);
app.use('/TecnicoServicesAdd', TecnicoServicesAdd);
app.use('/TecnicoServicesGetAll', TecnicoServicesGetAll);
app.use('/TecnicoServicesDelete', TecnicoServicesDelete);

//PAGO
app.use('/PagoPaypal', PagoPaypal);
app.use('/CapturarPago', CapturarPago);
app.use('/PagoMP', PagoMP);
app.use('/CapturarPagoMP', CapturarPagoMP);
app.use("/webhook-mercadopago", WebhookMPRoute);
app.use("/webhook-paypal", WebHookPayPal);

//SE ENCUENTRA
app.use('/SeEncuentraRegister', SeEncuentraRegister);
app.use('/SeEncuentraDelete', SeEncuentraDelete);
app.use('/SeEncuentraGet', SeEncuentraGet);
app.use('/SeEncuentraUpdate', SeEncuentraUpdate);

//CART
app.use('/CartAdd', CartAdd);
app.use('/CartGet', CartGet);
app.use('/CartUpdateQuantity', CartUpdateQuantity);
app.use('/CartRemove', CartRemove);
app.use('/CartClear', CartClear);
app.use('/CartTotal', CartTotal)
app.use('/CartGetByEmail', CartGetByEmail);
app.use('/CartClearByEmail', CartClearByEmail);

//PROFILE
app.use('/Profile', profile);

//Refresh Token
app.use('/renewToken', RefreshToken);
app.use('/GenerateTokenRecovery', GenerateTokenRecovery);
app.use('/ValidateTokenRecovery', ValidateTokenRecovery);

//--------------- INICIALIZAR SERVIDOR -------------------//

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

// --------------- Contador para la actualizacion de descuentos -------------------//
iniciarTareaDescuentos();
console.log("Iniciado el contador de descuentos");
