import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>ARDC Resource</h1>
      <h2>Meet your hiring needs while making an impact</h2>
      <p>
        Founded in 2004, ARDC is an Israeli non-profit organization that works
        to promote social inclusion and economic mobility for refugees through
        career guidance, job training, educational programming, and job
        placement.
      </p>
      <p>
        We meet can help you meet your hiring needs with qualified, skilled, and
        diligent employees from Israel's refugee communities.
      </p>
      <button>
        <NavLink to="/Register">Join now</NavLink>
      </button>
    </div>
  );
}

export default HomePage;
