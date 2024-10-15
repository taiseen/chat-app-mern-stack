import config, { prod } from "../../../config/index.js";
import jwt from "jsonwebtoken";


const generateTokenAndSetCookie = (res, userId) => {

    // generate token...
    const token = jwt.sign(
        { userId },
        config.token.jwtSecret,
        { expiresIn: config.token.jwtExpiresIn }
    );


    // set cookie...
    res.cookie(config.token.name, token, {
        secure: config.env === prod, // prevents man-in-the-middle attacks
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS - 15 days...
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        httpOnly: true, // this is not accessible by javascript... || prevent XSS attacks cross-site scripting attacks
    });

};


export default generateTokenAndSetCookie;