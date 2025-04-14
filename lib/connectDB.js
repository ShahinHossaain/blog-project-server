// // lib/connectDB.js
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// dotenv.config();

// const connectDB = async () => {
//     return await mongoose.connect(process.env.MONGODB_URI);
// };

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
    } catch (err) {
        console.log(err);
    }
}
export default connectDB;
