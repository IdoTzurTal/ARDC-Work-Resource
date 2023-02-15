const Applicant = require('../Models/Applicant')
const Skill = require('../Models/Skill')

exports.createSkill = async (req, res) => {
    const email = req.params.email
    const { title, description, examples } = req.body
    const newSkill = new Skill({ title, description, examples })

    Applicant.findOne({ email }, (error, AppwithSkill) => {
        if (error) {
            res.status(400).json({ message: "Applicant Not Found" })
        }
        else {
            console.log(req.body);
            newSkill.save()
                .then((newapp) => {
                    console.log("success");
                    AppwithSkill.skills.push(newapp);
                    AppwithSkill.save()
                        .then((finalApplicant) => res.status(200).json({ newapp, finalApplicant }))
                }).catch((error) => res.status(400).json({ message: error }))
        }
    })
}

exports.deleteSkill = async (req, res) => {
    Skill.findByIdAndDelete({
        _id:req.body.id
    },
        (error) => {
        if (error) {
            res.status(500).send(error)
        }
        else {
            res.status(200).json({ message: "Skill Deleted" })
        }
    })
}

exports.editSkill = (req, res) => {
    Skill.findByIdAndUpdate( req.body._id, req.body )
    .then((upskill) => {
        console.log("heeeyyyyyy")
        if (!upskill) {
            req.status(500).json({ message: "Skill Doesn't Exist" })
        }
        else {
            res.status(200).json({ message: "Skill Data Updated", upskill })
        }
    })
    .catch((error) => {
        res.status(500).json({ error })
    })
}