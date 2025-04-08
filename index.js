import express from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js";
import connectDB from "./lib/connectDB.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// console.log(process.env.test);


// MongoDB connection
connectDB();

app.get("/test", (req, res) => {
    res.status(200).json({ message: "Hello World" });
});

app.use("/comment", commentRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

