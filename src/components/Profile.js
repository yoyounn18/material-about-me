import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './Profile.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const Profile = () => {
    const slides = [
        { title: 'Introducing',
         description: '방년 24살 서울 사는 김영조입니다.'
        },
        { title: 'Front-End',
         description: 'React, Vue, Angular를 잘하고싶은 개발자'
        },
        { title: 'Back-End',
         description: 'Node.js를 잘 다루고싶은 개발자'
        },
        { title: 'JavaScript',
         description: '한국어보다 JavaScript를 잘하고싶은 개발자'
        },
        { title: 'Hard-worker',
         description: '일을 많이 하고싶은 개발자'
        }
      ];

    return (
        <div className="profile-main">
            <ScrollAnimation animateIn="flip">
            <div className="imageContainer">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Korea-Yeongjo-King_of_Joseon_Dynasty-1900.jpg/300px-Korea-Yeongjo-King_of_Joseon_Dynasty-1900.jpg"></img>
                </div>
            </div>
            </ScrollAnimation>
            <Slider >
                {slides.map((slide, index) => <div key={index}>
                    <h2>{slide.title}</h2>
                    <div>{slide.description}</div>
                    </div>)}
            </Slider>
        </div>
    )
}

export default Profile;