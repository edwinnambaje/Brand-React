import { useState } from "react";
import "./Contact.css";
import AuthService from "../services/auth.service";
function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };
  const onChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };
  const handleSend = (e) => {
    e.preventDefault();
    AuthService.contact(email, message,fullName).then(
      () => {
        
      })
  }
  return (
    <section className="contact">
      <div className="contact-items">
        <div className="contact-info">
          <h1>Get In Touch With Me</h1>
          <div className="contact-form">
            <form id="contact-form" onSubmit={handleSend}>
              <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Full Name"
                  className="input-field "
                  value={fullName}
                  onChange={onChangeFullName}
                />
              </div>
              <div className="name_error"> </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter Your Email"
                  className="input-field "
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>
              <div className="email_error"> </div>
              <div className="form-control">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  cols="70"
                  rows="10"
                  placeholder="Enter Your Message"
                  name="message"
                  className="input-field"
                  value={message}
                  onChange={onChangeMessage}
                ></textarea>
              </div>
              <div className="message_error"> </div>
              <div className="submit-button">
                <input
                  type="submit"
                  value="Submit"
                  id="submit-btn"
                  className="submit-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
