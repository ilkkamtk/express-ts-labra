import express from 'express';
import {authorPost, authorsGet} from '../controllers/authorController';

const router = express.Router();

router.route('/').get(authorsGet).post(authorPost);

export default router;
