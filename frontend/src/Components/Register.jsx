import { useNavigate, NavLink, Route } from "react-router-dom";
import FormApplicant from "./FormApplicant";
import FormEmployer from "./FormEmployer";

function Register() {
  return (
    <div>
      <h3>Sign up as:</h3>
      <button>
        <NavLink to="/FormApplicant">Applicant</NavLink>
      </button>
      <button>
        <NavLink to="/FormEmployer">Employer</NavLink>
      </button>
    </div>
  );
}

export default Register;
