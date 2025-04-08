import express from 'express';
import Post from '../models/post.model.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await Post.find();;
    res.status(200).json(posts);
});

// router.post("/", async (req, res) => {
//     try {
//         const newPost = new Post(req.body);
//         console.log("body", req.body);
//         const savedPost = await newPost.save();
//         res.status(201).json(savedPost);
//     } catch (err) {
//         console.error("Error creating post:", err);
//         res.status(400).json({ error: "Failed to create post" });
//     }
// });

export default router;