import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";

function Navbar() {
  const WhiteLink = styled(NavLink)({
    color: "white",
    textDecoration: "none",
    padding: 4,
    "&:hover": {
      fontWeight: "bold",
    },
  });

  return (
    <AppBar>
      <Toolbar
        sx={{
          position: "static",
          display: "flex",
          justifyContent: "space-between",
          p: 1,
        }}
      >
        <WhiteLink to="/">Home</WhiteLink>
        <WhiteLink to="/Register">Register</WhiteLink>
        <WhiteLink to="/Login">Login</WhiteLink>
        <WhiteLink to="/Employers">Employers</WhiteLink>
        <WhiteLink to="/Services">Services</WhiteLink>
        <WhiteLink to="/ContactUs">Contact Us</WhiteLink>
        {/* <WhiteLink
            sx={{ display: role === "Admin" ? "" : "none" }}
            to="/Admin"
          >
            Admin
          </WhiteLink> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
