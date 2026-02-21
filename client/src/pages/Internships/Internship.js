import React from 'react';
import { IoLogoReact } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Internship.css';

const Internship = () => {
  return (
    <div className='work' id='work'>
      <div className="container work-exp">
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
          Internship Experience
        </h2>
        <hr />
        <VerticalTimeline lineColor='#1e1e2c'>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Feb 2026 – Present"
            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
            icon={<IoLogoReact />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Maawaabro IT Solutions Pvt.Ltd</h4>
            <ul>
              <li>Developed a responsive public website for career readiness tests, mock tests, and call assistance features.</li>
              <li>Built dynamic timer-based test interfaces with seamless submission handling and real-time result display.</li>
              <li>Integrated REST APIs for test evaluation, score visualization, and dashboard data management.</li>
              <li>Implemented admin dashboard modules for test creation, question management, and result filtering.</li>
            </ul>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2025 – oct 2025"
            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
            icon={<IoLogoReact />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">WEB2ATTRACT</h4>
            <ul>
              <li>Developed responsive web applications using React and Next.js for multiple projects.</li>
              <li>Implemented CMS using Sanity for client Mibugo Consulting, enabling 100% dynamic content control.</li>
              <li>Wrote clean, reusable, and scalable code following modern frontend development practices.</li>
            </ul>

          </VerticalTimelineElement>

          {/* Angular Developer – Infosys */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Oct 2024 – Dec 2024"
            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
            icon={<IoLogoReact />}
          >
            <h3 className="vertical-timeline-element-title">Angular Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Infosys Springboard</h4>
            <ul>
              <li>Developed an Web-based travel planner using Angular and Node.js with voice commands.</li>
              <li>Integrated Nodemailer for automated email workflows.</li>
              <li>Implemented Git-based version control and basic OWASP security practices.</li>
            </ul>
          </VerticalTimelineElement>


          {/* Foundations of AI – Microsoft */}


        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Internship;
