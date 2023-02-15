import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Register">Register</NavLink>
      <NavLink to="/Employers">Emploers</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/ContactUs">Contact Us</NavLink>
    </div>
  );
}

export default Navbar;
