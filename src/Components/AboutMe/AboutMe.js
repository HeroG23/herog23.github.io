import "./AboutMe.css";
import { Link } from "react-router-dom";
function AboutMe() {
  return (
    <div className="About-Me content-box">
      <h1 className="about-me-header">About Me</h1>
      <p className="about-me-body">
        I am a full-stack developer out of Iowa City, IA,
      </p>
      <p className="about-me-body">
        With a passion for sports, video games, and now web development
      </p>
      <br />
      <p className="about-me-body"></p>
      <p className="about-me-body"></p>
      <p className="about-me-body"></p>

      <footer>
        <h4>Check out my other pages</h4>
        <div className="links">
          <Link
          className="Links"
            style={{ textDecoration: "none", color: "white" }}
            to="/projects"
          >
            Projects
          </Link>
          <Link className="Links"
          style={{ textDecoration: "none", color: "white" }} to="/skills">
            Skills
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default AboutMe;
