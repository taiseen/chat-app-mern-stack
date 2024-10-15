import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            min: 2,
            max: 40,
        },

        userName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
            max: 40,
            min: 6,
        },

        gender: {
            type: String,
            required: true,
            enum: ["male", "female"],
        },

        profilePic: { type: String, default: "" },

        lastLogin: { type: Date, default: Date.now },
    },

    { timestamps: true }
);


const userModel = mongoose.model('users', userSchema);

export default userModel;