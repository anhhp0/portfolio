import React, { useEffect } from "react";

import sr from "../../utils/scrollReveal";
import MyResume from "../../assets/resume/Resume_HaPhucAnh.pdf";
import picture from "../../assets/img/profile-pic.png";
import "./about.styles.css";

const About = (props) => {
  useEffect(() => {
    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 400 });
    sr.reveal(".about__text", { delay: 400 });
  });

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="bd-grid">
          <div className="about__img1">
            <img src={picture} alt="profile" />
          </div>
          <h2 className="about__subtitle">Phuc Anh Ha</h2>
          <p className="about__text">
            As an individual with good skills, proficient in reading English
            documentation, and adept at teamwork, I am eager to further develop
            myself in the role of a web developer.
          </p>
          <div>
            {/* <input type="button" value="Download Resume" className="about__button button" /> */}
            <a href={MyResume} download className="about__button button">
              Download Resume
            </a>
          </div>
        </div>
        <div className="about__img">
          <img src={picture} alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
