const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const signupSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true,lowercase:true},
    email:{type:String,required:true},
    phoneNo:{type:String,required:true},
    password:{type:String,required:true}
})

signupSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})


const userLogin = mongoose.model('user',signupSchema)

module.exports = userLogin;