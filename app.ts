import express from "express";
import bodyParser from 'body-parser';
import profile from './routes/profile';
import dotenv from "dotenv";

//import clientes
import ClienteRegister from './routes/Cliente/ClienteRegister';
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


dotenv.config();

const app = express().use(bodyParser.json());

//rutas cliente
app.use('/ClienteRegister', ClienteRegister);
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

// rutas factura
app.use('/FacturaRegister', FacturaRegister);

app.use('/Profile', profile);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
