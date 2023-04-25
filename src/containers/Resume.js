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
      now: 90,
    },
    {
      id: 2,
      text: "Html & Css",
      now: 95,
    },
    {
      id: 3,
      text: "JAVA",
      now: 35,
    },
  ];
  const otherSkills = [
    {
      id: 4,
      text: "TypeScript",
      now: 40,
    },
    {
      id: 5,
      text: "SQL",
      now: 55,
    },
    {
      id: 6,
      text: "Git & Github",
      now: 80,
    },
    {
      id: 7,
      text: "React Native / Kotlin",
      now: 50,
    },
  ];
  const educational = [
    {
      id: 0,
      date: '2011 - 2017',
      title: 'Higher School Graduation',
      subtitle: 'S.A de Padua',
      parrafe: 'In high school, I gained valuable experiences and knowledge that helped shape me into the person I am today. I explored different subjects and extracurricular activities, maintained good grades, and learned important skills such as time management, teamwork, and communication. My high school experience was a significant part of my personal and academic growth, and I am grateful for the opportunities and memories it provided.'
    },
    {
      id: 1,
      date: '2021 - Lifelong',
      title: 'Self-taught Developer',
      subtitle: 'Lifelong learner',
      parrafe: 'I am a self-taught web and mobille app developer, and I plan to be one for life. I have gained my skills through online courses, self-research, and lots of practice. I love learning and always seek new ways to improve my skills and knowledge. I feel very comfortable working autonomously and enjoy the challenges that web development presents me with.'
    },
    {
      id: 2,
      date: '2022 - 2025',
      title: 'Tech Lead in Mobile Apps',
      subtitle: 'National University of La Matanza',
      parrafe: 'During my time at university, I had the opportunity to study fullstack mobile application design and development. The program provided me with a comprehensive understanding of the entire mobile app development process, from user experience design to back-end development and cloud deployment. Through hands-on projects and coursework, I gained practical experience in designing, developing, and deploying high-quality mobile applications. I learned valuable skills such as mobile app architecture, front-end and back-end development, database management, and cloud deployment, which have been instrumental in my professional development. My experience in fullstack mobile application design and development at university has been an essential component of my career path as a web developer, and I am grateful for the skills and knowledge that I have gained from this program.'
    },
  ]
  const working = [
    {
      id: 0,
      date: '2021 - Present',
      title: 'App Deploys',
      subtitle: 'Consistency with Best Practices',
      parrafe: 'As a developer, it is essential to have a solid understanding of deployment practices and to be able to incorporate them into your work seamlessly. One way I practice this is by ensuring that my deployed applications meet industry-standard needs that would make them viable for use in a job setting. I have been continually practicing this skill by deploying applications with a variety of needs, such as scalability, and user experience, to ensure that I am always staying current with the best practices. Through this continuous practice, I am confident that I can successfully deploy high-quality applications in any work setting.'
    },
    {
      id: 1,
      date: '2022 - Present',
      title: 'System Assistant',
      subtitle: 'YACO-SA',
      parrafe: 'During my time as a systems assistant, I had the opportunity to work closely with developers on various projects, including web and mobile application development. I provided technical support to the team and helped troubleshoot any issues that arose during the development process. Additionally, I was responsible for maintaining the hardware and software systems, which gave me a better understanding of the overall infrastructure of web and mobile applications. This experience provided me with a deeper understanding of the software development process, including design, development, testing, and deployment. I was able to develop valuable technical skills that are applicable to web and mobile application development, such as programming languages, software tools, and database management. Overall, my experience as a systems assistant helped me to better understand the role of technology in application development and provided me with a solid foundation for pursuing a career in this field.'
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
          <h2 className="time-line-title">Educational Qualification</h2>
          <TimeLineExample infoResumeItems={educational} position={'left'} icon='educational'/>
        </div>
        <div className="timeline-work">
          <h2 className="time-line-title">Working Experience</h2>
          <TimeLineExample infoResumeItems={working} position={'right'} icon='working'/>
        </div>
      </div>
    </div>
  );
}
