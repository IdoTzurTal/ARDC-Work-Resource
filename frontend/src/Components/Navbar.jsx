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
    <div>
      <AppBar sx={{ display: "flex", justifyContent: "space-evenly", p: 1 }}>
        <Toolbar>
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
    </div>
  );
}

export default Navbar;
