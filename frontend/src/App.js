import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import ContactUs from "./Components/ContactUs";
import Employers from "./Components/Employers";
import FormEmployer from "./Components/FormEmployer";
import FormApplicant from "./Components/FormApplicant";
import Services from "./Components/Services";
import Admnin from "./Components/Admin";
import Navbar from "./Components/Navbar";
import Resumes from "./Components/Resume";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { Paper } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Paper sx={{ mt: 10, pb: 2 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/FormApplicant" element={<FormApplicant />} />
            <Route path="/FormEmployer" element={<FormEmployer />} />
            <Route path="/Employers" element={<Employers />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Resumes" element={<Resumes />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Admin" element={<Admnin />} />
          </Routes>
        </Paper>

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
