import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    const { username, adharno, password,phoneno } = req.body;
    if (!username || !password || !adharno||!phoneno || username == ' ' || adharno == ' ' || password == ' '||phoneno == ' ') {
         next(errorHandler(400, 'All fields are required'));
    }

    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        adharno,
        phoneno,
        password: hashPassword,
    });
    try {
        await newUser.save();
        res.json('sucsess')
    }
    catch (error) {
        next(error);
    }
}


export const signin = async (req, res, next) => {
    const { adharno, password } = req.body;

    if (!adharno || !password || password == '' || adharno == '') {
        next(errorHandler(400, 'Adharno and password are required'));
    }
    
    try {
        const validUser = await User.findOne({ adharno });
        if (!validUser) {
           return next(errorHandler(400, 'invalid email or password'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
           return next(errorHandler(400, 'invalid email or password'));
        }
        const token = jwt.sign(
            {
                id: validUser._id,
                userrole:validUser.userrole
            }, process.env.JWT_SECRET


        );

        const { password: pass, ...rest } = validUser._doc;



        res.status(200).cookie('access_token', token,{httpOnly: true,}).json(rest);


    } 
    
    catch (error) {
        next(error);
    }
    

}