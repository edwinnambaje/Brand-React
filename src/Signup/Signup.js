import { useState } from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import Swal from 'sweetalert2'
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
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
    AuthService.register(username,email, password).then(
      () => {
        Swal.fire(
          'Good job!',
          'Successfully Created an Account!',
          'success'
      )
      setTimeout(()=>{
        window.location.reload();
        },5000)
      })
  }
  return (
    
    <div className="main">
      <form id="form_login" onSubmit={handleLogin}name="form">
        <label className="lab">SignUp</label>
        <input
          type="text"
          id="input_email"
          name="username"
          placeholder="username"
          className="username"
          value={username}
          onChange={onChangeUsername}
        />
        <div className="email_error"></div>
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
          SignUp
        </button>
        <Link to={`/login`} className="btn">Login</Link>
      </form>
    </div>
  );
}
export default SignUp;
