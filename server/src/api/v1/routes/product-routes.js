import express from 'express';
import * as productController from '../controllers/product-controller.js';
const router = express.Router();

router.get('/:id', productController.getProductById);

router.post('/bulk-insert', productController.insertProductsInBulk);

export default router;