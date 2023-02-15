import { useContext } from "react";
import {EmpContext} from "./Context/EmpContext";

function Employers() {
  
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

  return (
    <div>
      <h3>Employers Working with us</h3>
      <p>Join our community and hire our services </p>
      <h4>List of the companies working with us: </h4>

      <p>MAPPED LIST (by admin's approve) </p>
      <p>Name of company:</p>
      <p>Job role:</p>
      <p>Logo: ?/ photo</p>
      <p>Job description:</p>
      <p>Requirements:</p>
      <p>other</p>
    </div>
  );
}

export default Employers;
