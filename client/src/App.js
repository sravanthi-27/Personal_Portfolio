import React, { useEffect } from "react"; // ✅ this is the fix
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Internship from "./pages/Internships/Internship";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';

function App() {
  const [theme] = useTheme();
   useEffect(() => {
    document.body.id = theme; // ← This is the fix!
  }, [theme]);

  return (
    <>
    <div id="theme">
      <ToastContainer />
      <MobileNav/>
      <Layout/>
      <div className="container">
        <About/>
        <Education />
        <Techstack/>
        <Projects/>
        <Internship/>
        <Contact/>
      </div>
      <div className="footer pb-3 ms-3">
        <Tada>
        <h4 className="text-center">
          Made by Bindu 👩‍💻 &copy; 2025
        </h4>
        </Tada>
      </div>
        <ScrollToTop smooth 
        color="#f29f67"
        style={{backgroundColor:'#1e1e2c', borderRadius:'80px',}} />
      </div>
      
    </>
  );
}

export default App;
