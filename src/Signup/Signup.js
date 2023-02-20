import "./Signup.css";
function SignUp() {
  return (
    <div className="main">
      <form id="form_login" method="post" name="form">
        <label className="lab">SignUp</label>
        <input
          type="text"
          id="input_email"
          name="username"
          placeholder="username"
          className="username"
        />
        <div className="email_error"></div>
        <input
          type="text"
          id="input_email"
          name="email"
          placeholder="email"
          className="username"
        />
        <div className="email_error"></div>
        <input
          type="password"
          id="input_password"
          name="password"
          placeholder="Password"
          className="pass password"
        />
        <div className="password_error"></div>
        <div className="form_error"></div>
        <button type="submit" className="button">
          SignUp
        </button>
      </form>
    </div>
  );
}
export default SignUp;
