import controllerError from "../../../helpers/controllerError.js";
import conversationModel from "../model/conversation.js";
import messageModel from "../model/message.js";


const sendMessage = async (req, res) => {

    const message = req.body.message;
    const senderId = req.user._id;
    const receiverId = req.params.id;

    if (!message.trim()) return res.status(400).json({ error: "Message cannot be empty..." });

    try {

        let conversation = await conversationModel.findOne(
            { participants: { $all: [senderId, receiverId] } }
        );


        if (!conversation) {
            conversation = await conversationModel.create(
                { participants: [senderId, receiverId] }
            );
        }


        const newMessage = new messageModel({ senderId, receiverId, message });


        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }


        // await conversation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);


        // TODO: SOCKET IO FUNCTIONALITY WILL GO HERE
        // const receiverSocketId = getReceiverSocketId(receiverId);
        // if (receiverSocketId) {
        // io.to(<socket_id>).emit() // used to send events to specific client
        //     io.to(receiverSocketId).emit("newMessage", newMessage);
        // }


        res.status(201).json(newMessage);

    } catch (error) {
        controllerError(res, error, 'sendMessage');
    }
}

export default sendMessage;