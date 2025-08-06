import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './home.css';
import Fade from "react-reveal/Fade";
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Miriyala_BinduSravanthi_Resume.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? <BsFillMoonStarsFill size={30} /> : <BsFillSunFill size={30} />}
        </div>

        <div className="container home-content">
          <Fade right>
            <h2>Hii 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "FullStack Developer!",
                    "MERN Stack Developer!",
                    "Python Developer!"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className='btn btn-hire'
                href='mailto:mbsravanthi2006@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Bindu%2C%0A%0AI%20came%20across%20your%20portfolio...'
                rel='noreferrer'
                target='_blank'
              >
                Hire Me
              </a>

              <a
                className='btn btn-cv'
                href={Resume}
                download="Miriyala_BinduSravanthi_Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
