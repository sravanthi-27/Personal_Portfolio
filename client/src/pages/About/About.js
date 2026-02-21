import React from 'react';
import './About.css';
import profileImg from '../../components/Menu/profile photo.png';
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
  <>
   <Jump>
    <div className='about' id="about">
      <div className="row">
        <div className="col-md-6 col-xl-4 col-lg-6 col-xs-12 about-img">
          <img src={profileImg} alt="Profile_pic" />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          <h1>About Me</h1>
          <p>
            I’m a B.Tech Computer Science student at St. Mary’s Women’s Engineering College, currently in my 4th year with an 8.7 GPA.
            As an Angular Developer Intern at Infosys Springboard, I built interactive web modules, automated email workflows, and validated APIs using Angular, Node.js, and Express.js.
            Later, as a Frontend Developer Intern at Web2Attract, I developed responsive web applications with React, Vite and Tailwind CSS , and implemented Sanity CMS for dynamic content management.
            I’m skilled in HTML, CSS, JavaScript, TypeScript, and passionate about creating efficient, user-friendly web solutions. I also hold an NPTEL Elite certification in Programming, Data Structures, and Algorithms using Python.
          </p>
        </div>
      </div>
    </div>
    </Jump>
  </>
  );
};

export default About;
