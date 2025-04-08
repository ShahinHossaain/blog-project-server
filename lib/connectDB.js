// lib/connectDB.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
