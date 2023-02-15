import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const handleLogin = () => {
  //   axios
  //     .post("http://localhost:9000/login", {
  //       email,
  //       password,
  //     })
  //     .then((result) => {
  //       localStorage.setItem("email", result.data.email);
  //       localStorage.setItem("token", result.data.token);
  //       setUser(localStorage.getItem("token"));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <h3>Login to existent user</h3>
      <input placeholder="username" />
      <input
        type="password"
        onChange={(ev) => setPassword(ev.target.value)}
        placeholder="password"
      />
      <button
      // onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
