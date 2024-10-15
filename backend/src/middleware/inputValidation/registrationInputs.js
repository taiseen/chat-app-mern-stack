import Joi from 'joi';


const registrationInputs = (req, res, next) => {

    const userGivenData = req.body;


    const schema = Joi.object({
        fullName: Joi.string().trim(true).max(40).required(),
        userName: Joi.string().trim(true).min(2).max(15).required(),
        gender: Joi.string().trim(true).required(),
        password: Joi.string().trim(true).min(6).max(40).required(),
        confirmPassword: Joi.string().trim(true).min(6).max(40).required(),
    });


    const { error } = schema.validate(userGivenData);


    if (error) return res.status(400).json({ message: "Bad request", error })


    next(); // if all OK ==> then go to registration process
}

export default registrationInputs;