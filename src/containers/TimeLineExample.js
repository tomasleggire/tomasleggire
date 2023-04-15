import React from "react";
import "../styles/TimeLineExample.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function LineExample({ date, title, subtitle, parrafe, position }) {
  return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work pito"
        contentStyle={{ background: "gray", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  gray" }}
        date={date}
        iconStyle={{ display: "none" }}
        position={position}
      >
        <h3 className="vertical-timeline-element-title h3-timeline">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle h4-timeline">{subtitle}</h4>
        <p>{parrafe}</p>
      </VerticalTimelineElement>
  )
}

export default function TimeLineExample({ infoResumeItems, position }) {
  return (
    <VerticalTimeline lineColor="rgba(128, 128, 128, 0.603)">
      {infoResumeItems.map((infoResumeItem) => {
        return (
          <LineExample 
            key={infoResumeItem.id}
            date={infoResumeItem.date}
            title={infoResumeItem.title}
            subtitle={infoResumeItem.subtitle}
            parrafe={infoResumeItem.parrafe}
            position={position}
          />
        )
      })}
    </VerticalTimeline>
  );
}
