import generateTokenAndSetCookie from '../token/generateTokenAndSetCookie.js';
import controllerError from '../../../helpers/controllerError.js';
import userModel from '../../user/model/user.js';
import bcryptjs from 'bcryptjs';


// 🔎 Read || Checking Operation
const login = async (req, res) => {

    // ⬇️ these data come from frontend by user given input field...
    const { userName, password } = req.body;

    try {

        // Step 1:- User existence checking... 
        // 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧

        // find user info from mongodb database...
        const existingUser = await userModel.findOne({ userName });

        // if no user exists...
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid username or password 🔴" });
        }

        const isPasswordMatch = await bcryptjs.compare(password, existingUser.password);

        // if the password does not match...
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid username or password 🔴" });
        }


        //  Step 2:- if user & password ok, then process for jwt...
        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        // jwt-token and cookie... & send to client side browser... 🌐
        generateTokenAndSetCookie(res, existingUser._id);

        existingUser.lastLogin = new Date(); // 🔄️ update lastLogin info...
        await existingUser.save(); // 🟢 save changes into database

        const user = {
            _id: existingUser._id,
            fullName: existingUser.fullName,
            userName: existingUser.userName,
            profilePic: existingUser.profilePic,
        }

        res.status(200).json(user);

    } catch (error) {
        console.log(error);

        controllerError(res, error, 'login');
    }
}


export default login;