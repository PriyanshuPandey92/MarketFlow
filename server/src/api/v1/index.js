// This file Calls all the Routes for the application
import express from 'express';
import productRoutes from './routes/product-routes.js'; 
import userRoutes from './routes/user-routes.js'
const router = express.Router();

// User routes
router.use('/user', userRoutes); 

// Product routes
router.use('/products', productRoutes); 

// The /test route is now the first and only active route in this file.
router.get('/test', (req, res)=>{
    console.log("I reached the /api/v1/test route!");
    res.status(200).json({ success: true, message: 'Test route reached successfully!' });
});

export default router;
