import express from "express";
import TecnicoDataUpdate from '../../controllers/TecnicoController/TecnicoDataUpdateController'
import { upload } from "../../middleware/multer";

const router = express.Router();

router.put('/', upload.single('imagen'), TecnicoDataUpdate);

export default router;