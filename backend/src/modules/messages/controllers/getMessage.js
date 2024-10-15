import controllerError from "../../../helpers/controllerError.js";
import conversationModel from "../model/conversation.js";

const getMessage = async (req, res) => {

    const receiverId = req.params.id;
    const senderId = req.user._id;

    try {

        const conversation = await conversationModel.findOne(
            { participants: { $all: [senderId, receiverId] } }
        ).populate("messages"); // NOT REFERENCE, BUT ACTUAL MESSAGES..


        if (!conversation) return res.status(200).json([]);


        res.status(200).json(conversation.messages);

    } catch (error) {
        controllerError(res, error, 'getMessages');
    }
}

export default getMessage