// main server file (e.g., index.js)
import express from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js";
import connectDB from "./lib/connectDB.js";

dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/comment", commentRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

// First connect to DB, then start server
connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1); // Optional: Stop app if DB connection fails
    });



