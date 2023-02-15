const Service = require("../Models/Service")

exports.createService = async (req, res) => {
    const { title, description, examples } = req.body
    const newService = new Service({ title, description, examples })
    newService.save((error, service) => {
        if (error) {
            res.status(500).send(error)
        }
        else {
            res.status(200).json({ message: "New Service Added", service })
        }
    })
}

exports.editService = async (req, res) => {
    Service.findByIdAndUpdate(req.body._id, req.body)
    .then((upservice) => {
        if (!upservice) {
            res.status(500).json({ message: "Service Doesn't Exist" })
        }
        else {
            res.status(200).json({ message: "Service Data Updated" })
        }
    })
    .catch((error) => {
        res.status(500).json({ error })
    })
}

exports.deleteService = (req, res) => {
    Service.findByIdAndDelete({
        _id: req.body.id
    },
        (error) => {
            if (error) {
                res.status(500).send(error)
            }
            else {
                res.status(200).json({ message: "Service Deleted" })
            }
        }
    )
}