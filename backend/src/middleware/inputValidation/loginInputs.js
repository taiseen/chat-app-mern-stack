import Joi from 'joi';


const loginInputs = (req, res, next) => {

    const userGivenData = req.body;

    const schema = Joi.object({
        userName: Joi.string().trim(true).required(),
        password: Joi.string().trim(true).min(6).max(40).required(),
    });


    const { error } = schema.validate(userGivenData);


    if (error) return res.status(400).json({ message: "Bad request", error })


    next(); // if all OK ==> then go to login process...
}

export default loginInputs;