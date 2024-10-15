import controllerError from '../helpers/controllerError.js';
import userModel from '../modules/user/model/user.js';
import config from '../config/index.js';
import jwt from "jsonwebtoken";


const protectedRoute = async (req, res, next) => {

    const incomingToken = req.cookies[config.token.name]; // dynamically get this token name...
    console.log({ incomingToken });


    // if no token present... FORBIDDEN
    if (!incomingToken) return res
        .status(403).json({ message: 'Unauthorized Access. JWT Token Is Required 🚫' });


    try {

        // 🔎 checking for - if some one trying to edit this token...
        const decodedInfo = jwt.verify(incomingToken, config.token.jwtSecret);


        if (!decodedInfo) return res
            .status(403).json({ message: "Unauthorized - JWT token wrong or expired 🔴" });


        // 🔎 find authenticated users by the help of token...
        const existingUser = await userModel
            .findById(decodedInfo.userId)
            .select('-password'); // remove this password field


        if (!existingUser) return res.status(404).json({ message: "User not found" });


        // ✅ store this authenticated user, inside request object...
        // by this property we can track this user, inside whole application...
        req.user = existingUser;


        next(); // if all OK ==> then go to requested endpoint...


    } catch (error) {
        controllerError(res, error, 'protectedRoute');
    }
}

export default protectedRoute;