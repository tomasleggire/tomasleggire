import React from "react";
import "../styles/Resume.scss";
import Title from "../components/Title";
import ProgressCircle from "../components/ProgressCircle";
import ProgressBar from "@ramonak/react-progress-bar";

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
        <div>
          {skills.map((skill) => {
            return (
              <div className="main-progress-bar" id={skill.id}>
                <h1 className="h1-progress-bar">{skill.text}</h1>
                <ProgressBar
                  className="progress-bar"
                  completed={skill.now}
                  isLabelVisible={false}
                  animateOnRender={true}
                />
              </div>
            );
          })}
        </div>
        <div>
          {otherSkills.map((otjerSkill) => {
            return (
              <div className="main-progress-bar" id={otjerSkill.id}>
                <h1 className="h1-progress-bar">{otjerSkill.text}</h1>
                <ProgressBar
                  className="progress-bar"
                  completed={otjerSkill.now}
                  isLabelVisible={false}
                  animateOnRender={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
