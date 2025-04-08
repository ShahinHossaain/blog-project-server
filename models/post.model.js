import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        required: false,
    },
    visit: {
        type: Number,
        default: 0,
    },
}, { timestamps: true }); // adds createdAt and updatedAt fields

const post = mongoose.model("Post", postSchema);

export default post;
