import React from "react";
import '../styles/ProgressCircle.scss';
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../hooks/AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";


export default function ProgressCircle({ porcentaje, name, classNameCircle }) {
    return (
        <div className={`circle-main-div ${classNameCircle}`}>
            <div className="circle-progress">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={porcentaje}
                    duration={2.0}
                    easingFunction={easeQuadInOut}
                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                strokeWidth={10}
                                text={`${roundedValue}%`}
                                styles={buildStyles({
                                     pathTransition: "none",
                                     textColor: '#F0F0F0',
                                     pathColor: '#14FFEC',
                                     trailColor: '#0D7377',
                                     textSize: '20px',
                                })}
                            />
                        );
                    }}
                </AnimatedProgressProvider>
            </div>
            <h1 className="h1-progress-circle">{name}</h1>
        </div>
    )
}