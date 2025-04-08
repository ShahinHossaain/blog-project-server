import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    // MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Successfully connected to MongoDB");
            // Start the server only after successful connection to MongoDB
            app.listen(3000, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        })
        .catch(err => {
            console.error("Error connecting to MongoDB:", err);
        });
}

export default connectDB;