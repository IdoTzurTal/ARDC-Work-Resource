const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: "Employer"
    },
    logo: {
        type: String
    }

})

module.exports = mongoose.model("Employer", empSchema)