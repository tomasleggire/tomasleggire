import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Timeline.scss';

function Timeline({ layaout }) {
  return (
        <VerticalTimeline layout={layaout} className='pito'>
      <VerticalTimelineElement
        className="vertical-timeline-element--work pito2"
        date="2010 - 2014"
        iconStyle={{ background: 'rgb(33, 100, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">First Job</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Second Job</h3>
        <h4 className="vertical-timeline-element-subtitle">Company Name</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
