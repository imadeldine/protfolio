import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Imad</h2>
        <div className="prompt">
          <p>A full stuck developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM,
               MaterialUI, Yarn, StyledComponents, Wordpress
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS,
              MySQL, Laravel , MongoDB 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PHP</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
