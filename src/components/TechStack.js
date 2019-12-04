import React from 'react';
import './TechStack.css';
import ImageBtn from './ImageBtn';
import ImageBtn2 from './ImageBtn2';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const TechStack = () => {
    return (
        <div className="tech-main">
            <div className="tech-title">
                <ScrollAnimation animateIn="fadeInUp">
                <pre>
                    TECH STACK
                </pre>
                </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn="fadeInUp">
            <div className="tech-stack">
                <ImageBtn />
                <ImageBtn2 />
            </div>
            </ScrollAnimation>
        </div>
    )
}

export default TechStack;