import { useContext, useEffect, useState } from "react";
import { EmpContext } from "./Context/EmpContext";
import axios from "axios";
import { Typography, Paper } from "@mui/material";

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/displayServices")
      .then(response => {
        setServices(response.data.servs);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {services.map(serv => (
        <Paper key={serv._id} sx={{ m: 1, mr: "4wv", ml: "4vw" }}>
          <Typography variant="h4" component="h5">
            Title: {serv.title}
          </Typography>
          <Typography>Description: {serv.description}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default ServicesList;