import edwin from '../images/profile.jpg';
import './about.css'
function About() {
  return (
    <section className="about">
      <div className="abouts container">
        <div className="left">
          <div className="img">
            <img src={edwin} alt="worrt"/>
          </div>
        </div>
        <div className="right">
          <h1 className="title">
            About <span>me</span>
          </h1>
          <h2>Software Engineer</h2>
          <p>
            I'm an experienced software engineer who constantly seeks out
            innovative solutions to everyday problems. In my five years in this
            industry, I've honed my analytical thinking and collaboration
            skills, and I love working with a team.
          </p>
          <button href="#" className="cta">Download Cv</button>
        </div>
      </div>
    </section>
  );
}

export default About;
