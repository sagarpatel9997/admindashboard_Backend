const mongoose = require("mongoose")
const validator = require("validator");

const techSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        //minlength: 3
    },
    tech: {
        type: String,
        required: true,
    }
    
})

const Tech = new mongoose.model('Tech', techSchema);
module.exports = Tech;