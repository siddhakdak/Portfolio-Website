import React from "react";
import "./about.css";
import ME from "../../assets/me3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about__content" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6 Months</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Worked with 4+ clients
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Projects Completed</small>
            </article>
          </div>
        
        <p>
        Hi there!

I am a Final-year BTech student at Bennett University, and my area of expertise is frontend/ Backend and Fullstack development. I have a strong passion for creating visually stunning and interactive websites and applications that provide a seamless user experience. <br />
I have been honing my skills in HTML, CSS, JavaScript, and various frontend frameworks, such as React. <br /> I have also gained experience in creating responsive web design and optimizing websites for speed and performance. <br />
Apart from technical skills, I am also well-versed in design principles, which helps me create aesthetically pleasing user interfaces that are easy to navigate
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  );
};

export default About;
