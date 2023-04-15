import React from "react";
import "../styles/TimeLineExample.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLineExample() {
  return (
    <VerticalTimeline lineColor="red">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "gray", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  gray" }}
        date="2011 - present"
        iconStyle={{ display: "none" }}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "gray", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  gray" }}
        date="2011 - present"
        iconStyle={{ display: "none" }}
        position="left"
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
