import React from 'react';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className="ImageSection">
      {/* <div className="img">
         <img src={about} alt="" />
      </div> */}
      <div className="about-info">
        <h4>
          I am<span> a Software Engineer</span>
        </h4>
        <p className="about-text">
        I majored in General Science with a minor in Economics from The Pennsylvania State University, with a specialization in Neurobiology, and later ventured into Software Engineering. My expertise lies in crafting robust APIs and developing E-commerce stores. Beyond my proficiency in programming, my broad background extends to Finance, Law, and Business Consulting
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>: George Alexander Lugo</p>
            <p>: U.S. Citizen</p>
            <p>: English, Spanish</p>
          </div>
        </div>
        <a href="/cv.docx" download className="btn">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
