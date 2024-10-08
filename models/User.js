import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
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
        email: {
            type: String,
            required: true,
            max: 70,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 30
        },
        picturePath: {
            type: String,
            default: ""
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);
export default User;