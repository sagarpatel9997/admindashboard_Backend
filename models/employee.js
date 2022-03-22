const mongoose = require("mongoose")
const validator = require("validator");

const employeeSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        //minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true //[true, "Email id already present"],
        /*validate(value) {
            if (validator.isEmail(value)) {
                throw new Error("Invaild Email")
            }
        }*/
    },
    age: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    dob: {
        type: Date,
        required: true,
    },
    higherEduc: {
        type: String,
        required: true,
    },
    tech: {
        type: String,
        required: true
    },
    dep: {
        type: String,
        required: true,
    },
    previousOrg: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true
    }


})

const Employee = new mongoose.model('Employee', employeeSchema);
module.exports = Employee;