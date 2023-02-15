const Applicant = require("../Models/Applicant")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.registerA = async (req, res) => {
    const { firstname, lastname, email, password, gender } = req.body
    const hash = await bcrypt.hashSync(password, 10)
    const newApplicant = new Applicant({ firstname, lastname, email, password: hash, gender })
    newApplicant.save((error, applicant) => {
        if (error) {
            res.status(500).send(error)
        }
        else {
            res.status(200).json({ message: "New Applicant Registered", firstname, lastname, applicant })
        }
    })
}

exports.loginA = (req, res) => {
    console.log(req.body)
    Applicant.findOne({
        email: req.body.email
    },
        (error, applicant) => {
            console.log(applicant)
            if (error) {
                res.status(500).json(error)
                console.log(error)
            }
            else if (applicant == null) {
                res.status(400).json({ message: "No Such Applicant Found" })
            }
            else {
                bcrypt.compare(req.body.password, applicant.password, (error, isMatch) => {
                    if (error || !isMatch) {
                        res.status(406).json({ message: "Encryption Error" })
                    }
                    else {
                        const token = jwt.sign({ id: applicant._id }, process.env.JWT_TOKEN)
                        res.json({ token, _id: applicant._id, firstname: applicant.firstname })
                    }
                })
            }
        }
    )
}

exports.deleteApplicant = (req, res) => {
    Applicant.findByIdAndDelete({
        _id: req.body.id
    },
        (error) => {
            if (error) {
                res.status(500).send(error)
            }
            else {
                res.status(200).json({ message: "Applicant Deleted" })
            }
        }
    )
}

exports.editApplicant = (req, res) => {
    Applicant.findByIdAndUpdate( req.body._id, req.body )
    .then((upapplicant) => {
        if (!upapplicant) {
            res.status(500).json({ message: "Applicant Doesn't Exist" })
        }
        else {
            res.status(200).json({ message: "Applicant Data Updated", upapplicant })
        }
    })
    .catch((error) => {
        res.status(403).json({ error: error.message })
    })
}
