import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userRef = { type: Schema.Types.ObjectId, ref: 'users', required: true };


const messageSchema = new Schema(
    {
        senderId: userRef,

        receiverId: userRef,

        message: { type: String, required: true },
    },

    { timestamps: true }
);


const messageModel = mongoose.model('messages', messageSchema);


export default messageModel;