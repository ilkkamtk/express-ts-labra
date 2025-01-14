import express from 'express';
import {authorsGet} from '../controllers/authorController';

const router = express.Router();

router.route('/').get(authorsGet);

export default router;
