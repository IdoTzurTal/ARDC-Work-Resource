import axios from "axios";
import { useState } from "react";

function FormApplicant() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [bio, setBio] = useState();
  const [experience, setExperience] = useState();
  const [mainSkill, setMainSkill] = useState();
  const [skills, setSkills] = useState();
  const [CV, setCV] = useState();

  //   const handleSignup = async () => {
  //     let result = axios.post("http://localhost:9000/register", {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       bio,
  //       experience,
  //       mainSkill,
  //       skills,
  //     });
  //     console.log(result.data);
  //   };

  return (
    <div>
      <form>
        <h1>Sign Up as Applicant: </h1>
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
        <label>Gender: </label>
        <select
          name="gender"
          id="gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
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

        <label>Bio: </label>
        <input
          type="text"
          placeholder="Bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <label>Experience: </label>
        <input
          type="text"
          placeholder="Experience"
          onChange={(e) => setExperience(e.target.value)}
        />
        <label>Choose your main skill</label>
        <select
          name="main-skill"
          id="main-skill"
          onChange={(e) => setMainSkill(e.target.value)}
        >
          <option value="QA Engineer">QA Engineer</option>
          <option value="Manual QA Engineer">Manual QA Engineer</option>
          <option value="Technical Support and Helpdesk">
            Technical Support and Helpdesk
          </option>
          <option value="IT Technician">IT Technician</option>
          <option value="Java Developer">Java Developer</option>
          <option value="Python Developer">Python Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Customer Support Representative">
            Customer Support Representative
          </option>
        </select>

        <label>Other skills (optional):</label>
        <input
          name="skills"
          id="skills"
          onChange={(e) => setSkills(e.target.value)}
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

export default FormApplicant;
