
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { response } = require('express')

const maxAge = 3*24*60*60

const createToken = (id) => {
  return jwt.sign({id},'this is the jwt secret',{expiresIn:maxAge})
}

module.exports.signup_get = (req,res)=>{}

module.exports.login_get = (req, res) => {};

module.exports.signup_post = async(req, res) => {
    const {username,email,phoneNo,password} = req.body;

    try{
        const user = await User.create({username, email, phoneNo, password});
        const token = createToken(user._id)
        response.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
        res.status(201).json({user:user._id})
    }
    catch(err){
        console.log('Error',err);
        res.status(400).send('error','user not created')
    }

};

module.exports.login_post = async(req, res) => {
     const { username,password } = req.body;
};