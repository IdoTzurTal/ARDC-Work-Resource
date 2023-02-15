import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  TextField,
  Select,
  MenuItem,
  Card,
  Button,
  FormGroup,
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
    <div>
      <form>
        <h1>Sign Up as Employer: </h1>
        <label>Company Name: </label>
        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>First Name: </label>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Job Role: </label>
        <input
          type="text"
          placeholder="Job Role"
          onChange={(e) => setProfession(e.target.value)}
        />
        <label>Description: </label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Requirements: </label>
        <input
          type="text"
          placeholder="Requirements"
          onChange={(e) => setRequirements(e.target.value)}
        />
        <label>Logo URL:</label>
        <input
          placeholder="paste public URL of photo here"
          onChange={(e) => setLogo(e.target.value)}
        />
        <label>Other: </label>
        <input
          type="text"
          placeholder="Other things important to you..."
          onChange={(e) => setOther(e.target.value)}
        />

        <button type="button" onClick={handleSignup}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default FormEmployer;
