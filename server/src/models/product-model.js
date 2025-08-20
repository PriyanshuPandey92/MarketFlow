// src/models/product.model.js
import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true }
}, { _id: false });

const makerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  established: String,
  avatar: String,
  verified: { type: Boolean, default: false },
  story: String
}, { _id: false });

const specificationSchema = new mongoose.Schema({
  material: String,
  glaze: String,
  care: String,
  origin: String,
  weight: String,
  dimensions: String
}, { _id: false });

const sustainabilitySchema = new mongoose.Schema({
  carbonNeutral: Boolean,
  localSourcing: Boolean,
  fairTrade: Boolean,
  packaging: String
}, { _id: false });

const shippingSchema = new mongoose.Schema({
  freeShipping: Boolean,
  estimatedDays: String,
  expedited: String,
  international: String
}, { _id: false });

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Slug ID
  name: { type: String, required: true },
  subtitle: String,
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  discount: { type: Number, min: 0, max: 100 },
  rating: { type: Number, min: 0, max: 5 },
  reviewCount: { type: Number, default: 0 },
  inStock: { type: Boolean, default: true },
  stockCount: { type: Number, min: 0 },
  category: { type: String, maxlength: 50},
  maker: makerSchema,
  images: [String],
  variants: [variantSchema],
  features: [String],
  specifications: specificationSchema,
  sustainability: sustainabilitySchema,
  shipping: shippingSchema
}, {
  timestamps: true,
  versionKey: false
});

// Middleware to update outofstock based on qty
productSchema.pre('save', function(next) {
  if (this.qty <= 0) {
    this.outofstock = true;
  } else {
    this.outofstock = false;
  }
  next();
});

export default mongoose.model('Products', productSchema);