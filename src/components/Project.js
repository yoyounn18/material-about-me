import React from 'react';
import './Project.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import GithubIcons from '@material-ui/icons/GitHub';
import WebIcons from '@material-ui/icons/Web';


const Project = () => {
    return (
        <div className="project-main">
            <div className="tech-title">
                <ScrollAnimation animateIn="fadeInUpBig">
                <pre>
                    PROJECT
                </pre>
                </ScrollAnimation>
            </div>
            <div className="project-product1">
                <div className="project-picture">
                    <img src="https://static.blex.kr/image/2019/12/04/0_nZBp85JR98k6gzb.png"></img>
                </div>
                <div className="project-guide">
                    <h3>회원제 클라우드 시스템</h3><br></br>
                    - React, Node.js를 활용한 웹 서비스<br></br>
                    - 회원가입, 파일업로드 구현<br></br>
                    <div className="project-social">
                    <div className="social">
                    <a className="b" href="https://github.com/yoyounn18/Cloud-Service"><GithubIcons /></a>
                    </div>
                    <div className="social">
                    <a className="b" href="https://github.com/yoyounn18/Cloud-Service"><WebIcons /></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="project-product2">
                <div className="project-guide">
                    <h3>자전거 후방감지 및 지시등 모듈</h3><br></br>
                    - Radar센서를 이용한 후방감지<br></br>
                    - Arduino의 LED센서를 이용한 방향지시등<br></br>
                    - 자체제작 안드로이드 앱과의 연동<br></br>
                    <div className="project-social">
                    <div className="social">
                    <a className="b" href="https://github.com/yoyounn18/Cloud-Service"><GithubIcons /></a>
                    </div>
                    </div>
                </div>
                <div className="project-picture">
                    <img src="https://static.blex.kr/image/2019/12/04/3_4823cwztluyFm4h.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Project;