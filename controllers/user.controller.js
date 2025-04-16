import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }
    // Step 1: Find user by clerkUserId
    const user = await User.findOne({ clerkUserId });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Step 2: Get saved post IDs
    const savedPostIds = user.savePost;
    // res.status(200).json(user.savePost);

    // Step 3: Find posts by those IDs and populate post's user
    const posts = await Post.find({ _id: { $in: savedPostIds } }).populate("user", "username");

    res.status(200).json(posts);

};

export const getUserSavedPosts2 = async (req, res) => {
    const clerkUserId = req.auth.userId;
    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    console.log(user)
    res.status(200).json(user.savePost);
};

export const savePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    const isSaved = user.savePost.some((p) => p === postId);

    if (!isSaved) {
        await User.findByIdAndUpdate(user._id, {
            $push: { savePost: postId },
        });
    } else {
        await User.findByIdAndUpdate(user._id, {
            $pull: { savePost: postId },
        });
    }

    res.status(200).json(isSaved ? "Post unsaved" : user);
};