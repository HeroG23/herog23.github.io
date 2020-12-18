import {Link} from "react-router-dom";
import auth from "../../auth.png";
import post from "../../post.png";
import createpost from "../../createpost.png";
import './Projects.css'

function Projects() {
  return (
    <div>
      <div className="Project-Previews content-box">
        <h1>Projects</h1>
        <div className="personal-project" style={{border:"2px solid black"}}>
          <h3>D&D Find Me</h3>
          <div>
              <h4>Auth page</h4>
            <img
              src={auth}
              style={{ height: "300px", width: "300px" }}
              alt="auth"
            />
            <br/>
            <h4>Post page</h4>
            <img
              src={post}
              style={{ height: "300px", width: "300px" }}
              alt="posts"
            />
            <br/>
            <h4>Create a post page</h4>
            <img
              src={createpost}
              style={{ height: "300px", width: "300px" }}
              alt="createPosts"
            />
          </div>
        </div>
        <div className="group-project"></div>
      </div>
      <footer>
        <h4>Check out my other pages</h4>
        <div className="links">
          <Link
          className="Links"
            style={{ textDecoration: "none", color: "white" }}
            to="/"
          >
            About Me
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

export default Projects;
