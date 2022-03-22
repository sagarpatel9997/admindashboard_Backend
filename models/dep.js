const mongoose = require("mongoose")
const validator = require("validator");

const depSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        //minlength: 3
    },
    dep: {
        type: String,
        required: true,
    }
    
})

const Dep = new mongoose.model('Dep', depSchema);
module.exports = Dep;