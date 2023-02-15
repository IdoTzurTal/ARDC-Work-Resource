import { Button, Card, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { display } from "@mui/system";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    // setLoading(true);
    axios
      .post("http://localhost:9000/loginA", {
        email,
        password,
      })
      .then((result) => {
        localStorage.setItem("email", email);
        localStorage.setItem("token", result.data.token);
        console.log(result.data);
        console.log(jwt_decode(localStorage.getItem("token")));
        // setLoading(false);
      })
      .catch((error) => {
        axios
          .post("http://localhost:9000/loginE", {
            email,
            password,
          })
          .then((result) => {
            console.log(result.data.token);
            localStorage.setItem("email", email);
            localStorage.setItem("token", result.data.token);
            console.log(jwt_decode(localStorage.getItem("token")));
            // setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(error);
        alert("logged in");
      });
  };

  return (
    <Card
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div>
        <Typography
          color="primary"
          sx={{ fontWeight: "bold" }}
          component="h4"
          variant="h4"
        >
          Login to existing user:
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            type="email"
            placeholder="email"
            sx={{ m: 2 }}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <TextField
            type="password"
            sx={{ m: 2 }}
            onChange={(ev) => setPassword(ev.target.value)}
            placeholder="password"
          />
          <Button variant="contained" sx={{ m: 2 }} onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
      <img src="/images/loginimg.png" alt="icon" style={{ width: "60vw" }} />
    </Card>
  );
}

export default Login;
