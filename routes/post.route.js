import express from 'express';
import { createPost, deletePost, getPost, getPosts } from '../controllers/post.controller.js';
const router = express.Router();

// ALL GET REQUEST 
router.get('/', getPosts);
router.get('/:slug', getPost);

// ALL POST REQUEST
router.post('/', createPost);

// ALL DELETE REQUEST 
router.delete('/:id', deletePost);


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