import express from 'express';
import profile from '../controllers/ProfileController';
import verifyToken from '../middleware/VerifyToken';
const router = express.Router();


router.get('/', verifyToken, profile);


export default router;