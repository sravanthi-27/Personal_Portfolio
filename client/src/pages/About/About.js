import React from 'react';
import './About.css';
import profileImg from '../../components/Menu/profile-img.jpg';
import Jump from 'react-reveal/Jump';

const About = () => {
  return (
  <>
   <Jump>
    <div className='about' id="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
          <img src={profileImg} alt="Profile_pic" />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
          <h1>About Me</h1>
          <p>
            I’m a passionate B.Tech Computer Science student at St. Mary's Women's Engineering College, 
            currently in my 4th year with an 8.7 GPA. As an Angular Full Stack Intern at Infosys Springboard, 
            I developed an online travel guide web application, gaining hands-on experience with HTML, CSS, 
            JavaScript, TypeScript, Angular, Node.js, Express.js, and Nodemailer. I enjoy learning new technologies 
            and solving real-world problems through innovative software. I hold an elite NPTEL certification 
            in Programming, Data Structures, and Algorithms using Python. I'm eager to contribute to challenging 
            projects that drive growth and innovation.
          </p>
        </div>
      </div>
    </div>
    </Jump>
  </>
  );
};

export default About;
