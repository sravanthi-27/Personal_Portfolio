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
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#1e1e2c' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Apr 2025 – May 2025"
            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
            icon={<IoLogoReact />}
          >
            <h3 className="vertical-timeline-element-title">Foundations of AI Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Microsoft (Edunet Foundation + AICTE)</h4>
            <ul>
              <li>Completed a national internship on AI fundamentals and responsible AI ethics.</li>
              <li>Built a house price prediction model using Python and regression algorithms.</li>
              <li>Worked with Scikit-learn, GenAI tools, and applied responsible AI principles.</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Internship;
