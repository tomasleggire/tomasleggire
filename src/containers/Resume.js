import React from "react";
import "../styles/Resume.scss";
import Title from "../components/Title";
import ProgressCircle from "../components/ProgressCircle";

export default function Resume() {
  return (
    <div className="resume-main-div">
      <Title title="MY SKILLS" subTitle="SKILLS" />
      <div className="main-circles">
        <ProgressCircle porcentaje={95} name="Front-end Development" classNameCircle="circle-1"/>
        <ProgressCircle porcentaje={75} name="Mobile App Development" classNameCircle="circle-2"/>
        <ProgressCircle porcentaje={30} name="Back-end Development" classNameCircle="circle-3"/>
      </div>
    </div>
  );
}
