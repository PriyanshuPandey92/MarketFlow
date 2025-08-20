import mongoose from "mongoose";

export const createConnection = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    console.log('MONGO DB URI is ', MONGODB_URI);

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    const options = {
      connectTimeoutMS: 10000,       // Fail fast if DB unreachable
      maxPoolSize: 10,               // Control DB connections
      autoIndex: process.env.NODE_ENV !== 'production' // Disable in production
    };

    return await mongoose.connect(MONGODB_URI, options);
  } catch (err) {
    throw err;
  }
};
