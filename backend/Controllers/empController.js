const Employer = require("../Models/Employer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerE = async (req, res) => {
  const { company, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const newEmployer = new Employer({ company, email, password: hash });
  newEmployer.save((error, employer) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json({ message: "New Employer Registered", company });
    }
  });
};

exports.loginE = (req, res) => {
  console.log(req.body);
  Employer.findOne(
    {
      email: req.body.email,
    },
    (error, employer) => {
      console.log(employer);
      if (error) {
        res.status(500).json(error);
        console.log(error);
      } else if (employer == null) {
        res.status(400).json({ message: "No Such Employer Found" });
      } else {
        bcrypt.compare(
          req.body.password,
          employer.password,
          (error, isMatch) => {
            if (error || !isMatch) {
              res.status(406).json({ message: "Encryption Error" });
            } else {
              const token = jwt.sign(
                { id: employer._id },
                process.env.JWT_TOKEN
              );
              res.json({
                token,
                _id: employer._id,
                firstname: employer.firstname,
              });
            }
            else if (employer == null) {
                res.status(400).json({ message: "No Such Employer Found" })
            }
            else {
                bcrypt.compare(req.body.password, employer.password, (error, isMatch) => {
                    if (error || !isMatch) {
                        res.status(406).json({ message: "Encryption Error" })
                    }
                    else {
                        const token = jwt.sign({ id: employer._id }, process.env.JWT_TOKEN)
                        res.json({ token, _id: employer._id, firstname: employer.firstname })
                    }
                })
            }
        }
    )
}

exports.deleteEmployer = (req, res) => {
    Employer.findByIdAndDelete({
        _id: req.body.id
    },
        (error) => {
            if (error) {
                res.status(500).send(error)
            }
            else {
                res.status(200).json({ message: "Employer Deleted" })
            }
        }
    )
}

exports.editEmployer = (req, res) => {
    Employer.findByIdAndUpdate( req.body._id, req.body )
    .then((upemployer) => {
        if (!upemployer) {
            res.status(500).json({ message: "Employer Doesn't Exist" })
        }
        else {
            res.status(200).json({ message: "Employer Data Updated", upemployer })
        }
    })
    .catch((error) => {
        res.status(403).json({ error: error.message })
    })
}
