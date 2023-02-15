const { PictureAsPdf } = require("@mui/icons-material");
const mongoose = require("mongoose");
const Skills = require("./Skills");

const appSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  experience: {
    type: String,
  },
  skills: {
    type: mongoose.Types.ObjectId,
    ref: "Skills",
  },
  cv: {
    type: String,
  },
  approved: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    default: "Applicant",
  },
});

module.exports = mongoose.model("Applicant", appSchema);
