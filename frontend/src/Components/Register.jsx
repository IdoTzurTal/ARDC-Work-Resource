import { Button, styled, Typography } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";

function Register() {
  const WhiteLink = styled(NavLink)({
    color: "#0077b6",
    textDecoration: "none",
    padding: 4,
  });

  return (
    <div>
      <Typography component="h2" variant="h5">
        Sign up as:
      </Typography>
      <Button variant="outlined" sx={{ m: 1 }}>
        <WhiteLink to="/FormApplicant">Applicant</WhiteLink>
      </Button>
      <Button variant="outlined" sx={{ m: 1 }}>
        <WhiteLink to="/FormEmployer">Employer</WhiteLink>
      </Button>
    </div>
  );
}

export default Register;
