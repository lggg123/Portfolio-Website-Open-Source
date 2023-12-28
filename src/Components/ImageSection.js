import React from 'react';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> a Software Engineer</span>
        </h4>
        <p className="about-text">
          I come from a General Science background at The Pennsylvania <br></br>
          State University. I specialized in Neurobiology and chose<br></br>
          to leave and pursue Software Engineering. Building API's <br></br>
          and E-commerce stores are my specialty. While my<br></br>
          background is broad it ranges from not just being proficient in a
          programming background. I am also proficient in Finance, Law, and
          Business Consulting.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: George Alexander Lugo</p>
            <p>: 30</p>
            <p>: U.S. Citizen</p>
            <p>: English, Spanish</p>
            <p>: 1590 Rosecrans Ave. D-645 Manhattan Beach, CA 90266</p>
          </div>
        </div>
        <a href="/George_Lugo_1190.docx" download className="btn">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ImageSection;