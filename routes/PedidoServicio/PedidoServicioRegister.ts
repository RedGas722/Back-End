import express from "express";
import PedidoServicioRegister from "../../controllers/PedidoServicioController/PedidoServicioRegisterController";
import { upload } from "../../middleware/multer";
const router = express.Router();


router.post('/', upload.single('firma'), PedidoServicioRegister);


export default router;