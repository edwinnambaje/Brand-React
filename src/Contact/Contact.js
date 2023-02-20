import "./Contact.css";
function Contact() {
  return (
    <section className="contact">
      <div className="contact-items">
        <div className="contact-info">
          <h1>Get In Touch With Me</h1>
          <div className="contact-form">
            <div id="contact-form">
              <div className="form-control">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter Your Full Name"
                  className="input-field "
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
