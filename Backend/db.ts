
 var MONGO_URI = process.env.DB_CONN_STRING;
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb://localhost:27017/' 
    if (!mongoURI) {
        MONGO_URI = 'mongodb://localhost:27017/'
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
    
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connectDB;