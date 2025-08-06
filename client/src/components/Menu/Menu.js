import React from "react";
import "./Menu.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import profileImg from './profile-img.jpg';
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -70,  // Adjust for fixed navbar
    duration: 0,
  };

  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={profileImg} alt="profile pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home" {...linkProps}>
                    <FcHome /> Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="about" {...linkProps}>
                    <FcAbout /> About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="education" {...linkProps}>
                    <FcReadingEbook /> Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="techstack" {...linkProps}>
                    <FcBiotech /> Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="projects" {...linkProps}>
                    <FcVideoProjector /> Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="work" {...linkProps}>
                    <FcPortraitMode /> Internships
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="contact" {...linkProps}>
                    <FcBusinessContact /> Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link"><Link to="home" {...linkProps}><FcHome /></Link></div>
              <div className="nav-link"><Link to="about" {...linkProps}><FcAbout /></Link></div>
              <div className="nav-link"><Link to="education" {...linkProps}><FcReadingEbook /></Link></div>
              <div className="nav-link"><Link to="techstack" {...linkProps}><FcBiotech /></Link></div>
              <div className="nav-link"><Link to="projects" {...linkProps}><FcVideoProjector /></Link></div>
              <div className="nav-link"><Link to="work" {...linkProps}><FcPortraitMode /></Link></div>
              <div className="nav-link"><Link to="contact" {...linkProps}><FcBusinessContact /></Link></div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
