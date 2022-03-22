const mongoose = require("mongoose")
const validator = require("validator");
const { alphanumeric } = require("validator/lib/alpha");
const { default: isAlpha } = require("validator/lib/isAlpha");

const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        //minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique:true //[true, "Email id already present"],
        /*validate(value) {
            if (validator.isEmail(value)) {
                throw new Error("Invaild Email")
            }
        }*/
    },
    password:{
        type: Number,
        required: true
    },
    repassword:{
        type: Number,
        required: true
    },
    gender:{
        type:String,
        required:true
    }
    
})

const User = new mongoose.model('User', userSchema);
module.exports = User;