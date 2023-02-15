const mongoose = require('mongoose')
const Applicant = require('./Applicant')

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    examples: {
        type: mongoose.Types.ObjectId,
        ref: "Applicant",
        required: false
    }
})

module.exports = mongoose.model("Skills", skillSchema)