import { useState } from "react";
import axios from "axios";

function FormEmployer() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [companyName, setCompanyName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [jobRole, setJobRole] = useState();
  const [description, setDescription] = useState();
  const [requirements, setRequirements] = useState();
  const [other, setOther] = useState();
  const [logo, setLogo] = useState();

  //   const handleSignup = async () => {
  //     let result = axios.post("http://localhost:9000/register", {
  //       email,
  //       password,
  //       firstName,
  //       lastName,
  //       companyName,
  //       jobRole,
  //       description,
  //       requirements,
  //       other,
  //     });
  //     console.log(result.data);
  //   };

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
          onChange={(e) => setJobRole(e.target.value)}
        />
        <label>Description: </label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
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
        <label>Other: </label>
        <input
          type="text"
          placeholder="Other things important to you..."
          onChange={(e) => setOther(e.target.value)}
        />

        <button
          type="button"
          // onClick={handleSignup}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default FormEmployer;
