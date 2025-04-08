import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }

});

const comment = mongoose.model("Comment", commentSchema);

export default comment;