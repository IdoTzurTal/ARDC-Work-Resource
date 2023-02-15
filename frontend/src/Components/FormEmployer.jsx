import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  TextField,
  Card,
  Button,
  FormGroup,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import EmpContext from "./Context/EmpContext";

function FormEmployer() {
  const { email, setEmail,
    password, setPassword,
    companyName, setCompanyName,
    firstName, setFirstName,
    lastName, setLastName,
    profession, setProfession,
    description, setDescription,
    requirements, setRequirements,
    other, setOther,
    logo, setLogo } = useContext(EmpContext)


  const handleSignup = async () => {
    let result = axios.post("http://localhost:9000/registerE", {
      companyName,
      firstName,
      lastName,
      email,
      password,
      logo,
      profession,
      description,
      requirements,
      other
    });
    console.log(result.data);
    alert("User created");
  };

  return (
    <Card sx={{ paddingLeft: "8vw", paddingRight: "8vw" }}>
      <FormControl>
        <FormGroup>
          <Typography sx={{ fontWeight: "bold" }} component="h2" variant="h4">
            Sign Up as Employer:{" "}
          </Typography>
          <FormLabel>Company Name: </FormLabel>
          <TextField
            label="Company Name"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <FormLabel>Email: </FormLabel>
          <TextField
            label="Email"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password: </FormLabel>
          <TextField
            label="Password"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel>First Name: </FormLabel>
          <TextField
            label="First Name"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormLabel>Last Name: </FormLabel>
          <TextField
            label="Last Name"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* <FormLabel>Job Role: </FormLabel>
        <TextField
        label="Job Role"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
          type="text"
          placeholder="Job Role"
          onChange={(e) => setJobRole(e.target.value)}
        /> */}
          {/* <FormLabel>Description: </FormLabel>
        <TextField
        label="Description"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormLabel>Requirements: </FormLabel>
        <TextField
        label="Description"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            
          type="text"
          placeholder="Requirements"
          onChange={(e) => setRequirements(e.target.value)}
        /> */}
          <FormLabel>Logo URL:</FormLabel>
          <TextField
            label="Logo URL"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            type="text"
            ut
            placeholder="paste public URL of photo here"
            onChange={(e) => setLogo(e.target.value)}
          />
          {/* <FormLabel>Other: </FormLabel>
        <TextField
        label="Other"
            sx={{ minmaxWidth: "20vw" }}
            margin="dense"
            

          type="text"
          placeholder="Other things important to you..."
          onChange={(e) => setOther(e.target.value)}
        />

          <Button type="button" onClick={handleSignup}>
            Sign up
          </Button>
        </FormGroup>
      </FormControl>
    </Card>
  );
}

export default FormEmployer;
