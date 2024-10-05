import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
            min: 4,
            max: 20
        },
        lastName: {
            type: String,
            required: true,
            min: 4,
            max: 20
        },
        picturePath: {
            type: String,
            default: ""
        },
        userPicturePath: {
            type: String,
            default: ""
        },
        comments: {
            type: Array,
            default: []
        },
        likes: {
            type: Map,
            of: Boolean
        },
        location: String,
        description: String,
    },
    {
        timestamps: true
    }
)

const Post = mongoose.model("Post", postSchema);
export default Post;