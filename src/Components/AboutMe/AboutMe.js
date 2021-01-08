import "./AboutMe.css";
import { Link } from "react-router-dom";
function AboutMe() {
  return (
    <div className="About-Me">
      <div className="about-me content-box">
        <h2 className="about-me-header">About Me</h2>
        <p className="about-me-body">
          I am a full-stack developer out of Iowa City, IA, With a passion for
          sports, video games, and now web development. During a 13 week
          program, I have gained a varying degree of skills in the web
          developing field. Starting with learing about Javascript, HTML, and
          CSS to learning how to build web apps using React, Express and many
          other attachments to the React foundation, I have built one website,
          and collaborated with a team to build another.
        </p>
        <p className="about-me-body"></p>
      </div>
      <footer style={{position:"absolute", bottom:"0", left:"0"}}>
        <h4>Check out my other pages</h4>
        <div className="links">
          <Link
            className="Links"
            style={{ textDecoration: "none", color: "white", border:"1px solid white" }}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="Links"
            style={{ textDecoration: "none", color: "white", border:"1px solid white"  }}
            to="/skills"
          >
            Skills
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default AboutMe;
