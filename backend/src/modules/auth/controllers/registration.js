import generateTokenAndSetCookie from '../token/generateTokenAndSetCookie.js';
import controllerError from '../../../helpers/controllerError.js';
import userModel from '../../user/model/user.js';
import bcryptjs from 'bcryptjs';


// ✅ Write || Create Operation
const registration = async (req, res) => {

    // ⬇️ these data come from frontend by user given input field...
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    try {
        // Step 1:- User existence checking... 
        // 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧

        const userExistByUserName = await userModel.findOne({ userName });


        if (userExistByUserName) return res
            .status(400).json({ message: 'Username already exists 🔴' });


        if (password !== confirmPassword) return res
            .status(400).json({ error: "Passwords don't match" });


        // Step 2:- if user not exist, then start registration process...
        // 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩

        // 📝 for password protection | Hashing System... | avoid Hashing collection also...
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt); // hash user given password...


        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;


        // ✅ creating new user | object data model...
        const registerNewUser = new userModel({
            fullName,
            userName,
            gender,
            password: hashedPassword,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });

        if (!registerNewUser) return res.status(400).json({ error: "Invalid user data" });


        generateTokenAndSetCookie(res, registerNewUser._id); // Generate JWT token here


        await registerNewUser.save(); // ✅ save user at mongodb database...


        // send user info at frontend...
        res.status(201).json({
            _id: registerNewUser._id,
            fullName: registerNewUser.fullName,
            userName: registerNewUser.userName,
            profilePic: registerNewUser.profilePic,
        });

    } catch (error) {
        controllerError(res, error, 'registration');
    }
}

export default registration;