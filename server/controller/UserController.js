const {db}=require('../database/sequelize/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const secretKey='string'
const SignUp = async (req, res) => {
    try {
        const { firstName,lastName, email, password } = req.body;
        const userExists = await db.User.findOne({where: {email}});
        if (userExists) {
            return res.status(400).send('Email is already associated with an account');
        }
        await db.User.create({
            firstName,
            lastName,
            email,
            password: await bcrypt.hash(password, 15),
        });
        return res.status(200).send('Registration successful');
    } catch (err) {
        return res.status(500).send(err,'Error in registering user');
    }
}

const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);

        const user = await db.User.findOne({
            where: {email:email}
        });
        if (!user) {
            return res.status(404).json('Email not found');
        }     
        const passwordValid = await bcrypt.compare(password, user.password);
        console.log(passwordValid);
        if (!passwordValid) {
            return res.status(404).send('Incorrect email and password combination');
        }else{
            const token = jwt.sign({ userid: user.userid,email:user.email },secretKey)
        res.status(200).send(token);}
        
    } catch (err) {
        return res.status(500).send('Sign in error');
    }
}
module.exports = {SignUp , signInUser}


