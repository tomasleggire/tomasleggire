import React from "react";
import "../styles/Resume.scss";
import Title from "../components/Title";
import ProgressCircle from "../components/ProgressCircle";
import ProgressBar from "@ramonak/react-progress-bar";
import TimeLineExample from "./TimeLineExample";

export default function Resume() {
  const skills = [
    {
      id: 0,
      text: "JavaScript",
      now: 85,
    },
    {
      id: 1,
      text: "React Js",
      now: 80,
    },
    {
      id: 2,
      text: "Html & Css",
      now: 95,
    },
    {
      id: 3,
      text: "JAVA",
      now: 30,
    },
  ];

  const otherSkills = [
    {
      id: 4,
      text: "JavaScript",
      now: 85,
    },
    {
      id: 5,
      text: "React Js",
      now: 80,
    },
    {
      id: 6,
      text: "Html & Css",
      now: 95,
    },
    {
      id: 7,
      text: "JAVA",
      now: 30,
    },
  ];

  return (
    <div className="resume-main-div">
      <Title title="MY SKILLS" subTitle="SKILLS" />
      <div className="main-circles">
        <ProgressCircle
          porcentaje={95}
          name="Front-end Development"
          classNameCircle="circle-1"
        />
        <ProgressCircle
          porcentaje={75}
          name="Mobile App Development"
          classNameCircle="circle-2"
        />
        <ProgressCircle
          porcentaje={30}
          name="Back-end Development"
          classNameCircle="circle-3"
        />
      </div>
      <div className="main-progress-container">
        <div className="skills">
          {skills.map((skill) => {
            return (
              <div className="main-progress-bar" id={skill.id}>
                <h1 className="h1-progress-bar">{skill.text} - <span>({skill.now}%)</span></h1>
                <ProgressBar
                  className={"progress-bar"}
                  completed={skill.now}
                  isLabelVisible={false}
                  animateOnRender={true}
                  baseBgColor={'#0D7377'}
                  bgColor={'#14FFEC'}
                  height="16px"
                />
              </div>
            );
          })}
        </div>
        <div className="otherSkills">
          {otherSkills.map((otherSkill) => {
            return (
              <div className="main-progress-bar" id={otherSkill.id}>
                <h1 className="h1-progress-bar">{otherSkill.text} - <span>({otherSkill.now}%)</span></h1>
                <ProgressBar
                  className="progress-bar"
                  completed={otherSkill.now}
                  isLabelVisible={false}
                  animateOnRender={true}
                  baseBgColor={'#0D7377'}
                  bgColor={'#14FFEC'}
                  height="16px"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="main-timelines">
        <TimeLineExample />
      </div>
    </div>
  );
}
