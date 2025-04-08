import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
    const posts = await Post.find();;
    res.status(200).json(posts);
}

export const getPost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug });
    res.status(200).json(post);
}

export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        console.log("body", req.body);
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        console.error("Error creating post:", err);
        res.status(400).json({ error: "Failed to create post" });
    }
}

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