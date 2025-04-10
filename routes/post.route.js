import express from 'express';
import { createPost, deletePost, getPost, getPosts, uploadAuth } from '../controllers/post.controller.js';
const router = express.Router();

// ALL GET REQUEST 
router.get('/upload-auth', uploadAuth);
router.get('/', getPosts);
router.get('/:slug', getPost);

// ALL POST REQUEST
router.post('/', createPost);

// ALL DELETE REQUEST 
router.delete('/:id', deletePost);

export default router;