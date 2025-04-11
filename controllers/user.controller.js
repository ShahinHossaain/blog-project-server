import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    res.status(200).json(user.savePost);
};

export const savePost = async (req, res) => {
    console.log("called")
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