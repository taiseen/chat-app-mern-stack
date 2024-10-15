import registrationInputs from '../../../middleware/inputValidation/registrationInputs.js';
import loginInputs from '../../../middleware/inputValidation/loginInputs.js';
import registration from '../controllers/registration.js';
import logout from '../controllers/logout.js';
import login from '../controllers/login.js';
import express from 'express';


const router = express.Router();


// user send data, ✅ create operation...
router.post('/register', registrationInputs, registration);


// user sending data, 🔎 checking operation...
router.post('/login', loginInputs, login);


// user sending data, 🔎 checking operation...
router.post('/logout', logout);


export default router;





// 📝 Learning Note:-
// if user hit by browser at this url ==> /login
// server replay as an error ==> 404
// because this url method is [.post]
// if this url method is [.get] then user get replay from server

// so why [.post] ?
// [.post] ==> because user send some data to server | backend...
// [.post] ==> all of the input values of form, send to the backend...

// so [.post] always possible by user input || click interaction...
// by url bar just typing... & hit enter... its wont work...