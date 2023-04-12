import React from "react";
import '../styles/ProgressCircle.scss';
import { CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../hooks/AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";


export default function ProgressCircle({ }) {
    return (
        <div className="circle-main-div">
            <div className="circle-progress">
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={66}
                    duration={2.0}
                    easingFunction={easeQuadInOut}
                >
                    {value => {
                        const roundedValue = Math.round(value);
                        return (
                            <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({ pathTransition: "none" })}
                            />
                        );
                    }}
                </AnimatedProgressProvider>
            </div>
        </div>
    )
}