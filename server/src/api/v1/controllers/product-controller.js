
import * as productService from '../../../services/product-service.js';
import { asyncHandler } from '../../../middlewares/error-middleware.js';
import logger from '../../../utils/logger/color-logger.js';
import Product from '../../../models/product-model.js';

export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  logger.info(`Fetching product with ID: ${id}`);

  const product = await productService.getProductById(id);

  if(!product) {
    logger.error(`Product with ID: ${id} not found`);
    return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
    });
  }
  logger.success(`Found product: ${product.title}`);

  res.status(200).json({ 
    success: true, 
    data: product 
  });

});

export const insertProductsInBulk = asyncHandler(async (req, res) => {
  try {
    const data = req.body.products; // expecting: { products: [ {}, {}, ... ] }

    const result = await Product.insertMany(data);

    res.status(201).json({
      message: 'Products inserted successfully',
      insertedCount: result.length,
      data: result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});