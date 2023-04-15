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
  const educational = [
    {
      id: 0,
      date: '2008 - 2010',
      title: 'Higher School Graduation',
      subtitle: 'Abc College.',
      parrafe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
    },
    {
      id: 1,
      date: '2010 - 2014',
      title: 'Bachelor of Sciences',
      subtitle: 'Def University.',
      parrafe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
    },
    {
      id: 2,
      date: '2014 - 2016',
      title: 'Masters of Sciences',
      subtitle: 'Def University.',
      parrafe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
    },
  ]
  const working = [
    {
      id: 0,
      date: '2015 - 2017',
      title: 'UI/UX Designer',
      subtitle: 'Abc Company.',
      parrafe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
    },
    {
      id: 1,
      date: '2017 - Present',
      title: 'Front-end Developer',
      subtitle: 'Def Company.',
      parrafe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur donec gravida ullamcorper cum id. Sit viverra donec in ornare euismod.'
    },
  ]

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
      <Title title='MY RESUME' subTitle='RESUME' />
      <div className="main-timelines">
        <div className="timeline-edu">
          <TimeLineExample infoResumeItems={educational} position={'left'}/>
        </div>
        <div className="timeline-work">
          <TimeLineExample infoResumeItems={working} position={'right'}/>
        </div>
      </div>
    </div>
  );
}
