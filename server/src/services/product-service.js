import Product from "../models/product-model.js";


export const getProductById = async (id) => {
  const product = await Product.findById(id).lean(); // using lean() to return a plain JavaScript object
  return product;
};

