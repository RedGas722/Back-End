import express from "express";
import { renewTokenController } from '../../controllers/TokenControllers/TokenRefreshController';
import verifyToken from '../../middleware/VerifyToken';

const router = express.Router();

router.get('/', verifyToken, renewTokenController);

export default router;
