import React from 'react';
import { MdSchool } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';

const Education = () => {
  return (
    <>
      <div className='education' id='education'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Education Details</h2>
        <hr />
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022 - Expected May 2026"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science and Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">St. Mary’s Women’s Engineering College</h4>
            <p>CGPA: 8.7<br />Affiliated to JNTU Kakinada</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2020 – 2022"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate (MPC)</h3>
            <h4 className="vertical-timeline-element-subtitle">Sri Chaitanya Junior College</h4>
            <p>CGPA: 9.6<br />Board: BIEAP</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2020"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">SSC</h3>
            <h4 className="vertical-timeline-element-subtitle">Presidency High School</h4>
            <p>CGPA: 8.6<br />Board: BSEAP</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
