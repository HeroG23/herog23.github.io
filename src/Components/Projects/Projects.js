import { Link } from "react-router-dom";
import auth from "../../auth.png";
import post from "../../post.png";
import createpost from "../../createpost.png";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div className="Project-Previews content-box">
        <h2 style={{fontSize: "36px", textDecoration:"underline"}}>Projects</h2>
        <div className="personal-project" style={{ border: "2px solid black" }}>
          <a href="https://briandemro.dev">
            <h3>D&D Find Me</h3>
          </a>
          <div>
            <h4>Auth page</h4>
            <img
              src={auth}
              style={{ height: "300px", width: "475px" }}
              alt="auth"
            />
            <br />
            <h4>Post page</h4>
            <img
              src={post}
              style={{ height: "300px", width: "475px" }}
              alt="posts"
            />
            <br />
            <h4>Create a post page</h4>
            <img
              src={createpost}
              style={{ height: "300px", width: "475px" }}
              alt="createPosts"
            />
          </div>
        </div>
        <div className="group-project" style={{border: "2px solid black"}}>
          <a href="https://dndfindme.com">
            <h3>DnD Find Me</h3>
          </a>
          <div>
            <h4>Login Page</h4>
            <video width="70%" alt="login" controls autoplay>
              <source src="login.mp4" type="video/mp4" />
            </video>
            <h4>Registration Page</h4>
            <img src="register1.jpg" alt="group-register" style={{width: "475px", height:"300px"}}/>
            <h4>Feed</h4>
            <video width="70%" alt="feed" controls autoplay>
              <source src="feed.mp4" type="video/mp4" />
            </video>
            <h4>Single Post</h4>
            <img src="singlePost.png" alt="single-post" style={{height:"300px", width:"475px"}}/>
            <h4>New Post</h4>
            <img src="newPost.jpg" alt="new-post" style={{height:"300px", width:"475px"}}/>
            <h4>Google Maps</h4>
            <video width="70%" alt="feed" controls autoplay>
              <source src="googleMaps.mp4" type="video/mp4" />
            </video>
            <h4>Profile</h4>
            <img src="profile.jpg" alt="profile" style={{height:"300px", width:"475px"}}/>
          </div>
        </div>
      </div>
      <footer style={{position:"relative", bottom:"0"}}>
        <h4>Check out my other pages</h4>
        <div className="links">
          <Link
            className="Links"
            style={{ textDecoration: "none", color: "white", border:"1px solid white" }}
            to="/"
          >
            About Me
          </Link>
          <Link
            className="Links"
            style={{ textDecoration: "none", color: "white", border:"1px solid white"}}
            to="/skills"
          >
            Skills
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
