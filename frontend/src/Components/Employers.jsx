import { useContext, useEffect, useState } from "react";
import {EmpContext} from "./Context/EmpContext";
import axios from "axios";
import { Typography, Paper } from "@mui/material";

const EmployerList = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/displayEmployers")
      .then(response => {
        setEmployers(response.data.emps);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {employers.map(employer => (
        <Paper key={employer._id} sx={{m:1, mr:"4wv", ml:"4vw"}}>
          <Typography variant="h4" component="h5">Name of company: {employer.company}</Typography>
          {employer.logo && <img src={employer.logo} alt="Company logo" />}
          <Typography>Email: {employer.email}</Typography>
          <Typography>Job description: {employer.description}</Typography>
          <Typography>Requirements: {employer.requirements}</Typography>
          <Typography>Other: {employer.other}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default EmployerList;