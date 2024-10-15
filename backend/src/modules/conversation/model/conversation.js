import mongoose from "mongoose";
const Schema = mongoose.Schema;


const type = Schema.Types.ObjectId;


const conversationSchema = new Schema(
    {
        participants: [
            { type, ref: "users" },
        ],
        messages: [
            { type, ref: "messages", default: [] },
        ],
    },

    { timestamps: true }
);


const conversationModel = mongoose.model('conversations', conversationSchema);


export default conversationModel;