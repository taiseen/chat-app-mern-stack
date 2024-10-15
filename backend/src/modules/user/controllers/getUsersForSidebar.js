import controllerError from "../../../helpers/controllerError.js";
import userModel from "../model/user.js";

const getUsersForSidebar = async (req, res) => {

    const authUserId = req.user._id;

    try {
        // get all user from database... but not get currently logged in user...
        const userList = await userModel.find({ _id: { $ne: authUserId } }).select("-password");

        res.status(200).json(userList);

    } catch (error) {
        controllerError(res, error, 'getUsersForSidebar');
    }
}

export default getUsersForSidebar;