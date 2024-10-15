import config from '../../../config/index.js';


// 🔎 Read || Checking Operation
const logout = async (_, res) => {

    res.clearCookie(config.token.name);

    return res.status(200).json({ message: "You are logout successfully ✅" });

}


export default logout;