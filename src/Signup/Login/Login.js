import { Link } from "react-router-dom";
import "../Signup.css";
import { useState } from "react";
import AuthService from "../../services/auth.service";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then(
      () => {
       alert('Success')
        window.location.reload();
      })
  }
  return (
    <div className="main">
      <form id="form_login" onSubmit={handleLogin} name="form">
        <label className="lab">Login</label>
        <input
          type="text"
          id="input_email"
          name="email"
          placeholder="email"
          className="username"
          value={email}
          onChange={onChangeEmail}
        />
        <div className="email_error"></div>
        <input
          type="password"
          id="input_password"
          name="password"
          placeholder="Password"
          className="pass password"
          value={password}
          onChange={onChangePassword}
        />
        <div className="password_error"></div>
        <div className="form_error"></div>
        <button type="submit" className="button">
          Login
        </button>
        <Link to={`/signup`} className="btn">Signup</Link>
      </form>
    </div>
  );
}
export default Login;
