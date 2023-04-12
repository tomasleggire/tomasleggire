import React from "react";
import '../styles/Resume.scss';
import Title from "../components/Title";
import ProgressCircle from "../components/ProgressCircle";

export default function Resume() {
    return (
        <div className="resume-main-div">
            <Title title='MY SKILLS' subTitle='SKILLS' />
            <ProgressCircle />
        </div>
    )
}