// main server file (e.g., index.js)
import express from "express";
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import commentRouter from "./routes/comment.route.js";
import postRouter from "./routes/post.route.js";
import connectDB from "./lib/connectDB.js";
import webHookRouter from "./routes/webhook.route.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors(process.env.CLIENT_URL));
app.use("/webhooks", webHookRouter);
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use(clerkMiddleware());
app.use("/comments", commentRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/auth-state", (req, res) => {
    const authState = req.auth;
    res.json(authState);
});

app.get("/protect", (req, res) => {
    const { userId } = req.auth;
    if (!userId) {
        return res.status(401).json("not authenticated bro");
    }
    res.status(200).json("contentt");
});

// ERROR HANDLER 
app.use((error, req, res, next) => {
    res.status(error.status || 500); // Sets HTTP status code, defaults to 500

    res.json({
        message: error.message || "Something went wrong!", // Provides error message
        status: error.status, // Includes error status
        stack: error.stack, // Displays stack trace
    });
});


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



