const mongoose = require("mongoose")
const validator = require("validator");

const registerSchema = new mongoose.Schema({
    
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

const Register = new mongoose.model('Register', registerSchema);
module.exports = Register;