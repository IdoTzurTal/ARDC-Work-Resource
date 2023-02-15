import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";

function Navbar() {
  const WhiteLink = styled(NavLink)({
    color: "white",
    textDecoration: "none",
    padding: 4,
  });

  return (
    <div>
      <AppBar sx={{ position: "fixed", p: 1 }}>
        <Toolbar>
          <WhiteLink to="/">Home</WhiteLink>
          <WhiteLink to="/Register">Register</WhiteLink>
          <WhiteLink to="/Login">Login</WhiteLink>
          <WhiteLink to="/Employers">Employers</WhiteLink>
          <WhiteLink to="/Services">Services</WhiteLink>
          <WhiteLink to="/ContactUs">Contact Us</WhiteLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
