import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin'

import logo from './img/logo.svg';

import girls from './girls.data';
import flowers from './flowers.data';

import flower_1 from './img/flower-1.svg';
import flower_3 from './img/flower-3.svg';
import flower_15 from './img/flower-15.svg';

export default function Start() {

    gsap.registerPlugin(MotionPathPlugin)

    let start = useRef(null);
    let path = useRef(null);
    let subTitle = useRef(null);
    let title = useRef(null);
    let fl_1 = useRef(null);
    let fl_3 = useRef(null);
    let fl_15 = useRef(null);

    useEffect(() => {
        gsap.to(start, {
            duration: 1.2,
            opacity: 1,
            ease: "power3.inOut"
        });
        // gsap.to(fl_1, {
        //     rotation:"360",
        //     duration: 35,
        //     ease: "linear",
        //     repeat: -1
        // });
        gsap.to(fl_1, {
            duration: 5, 
            repeat: 12,
            repeatDelay: 3,
            yoyo: true,
            ease: "power1.inOut",
            motionPath:{
              path: path,
              align: path,
              autoRotate: true,
              alignOrigin: [0.5, 0.5]
            }
          });
        gsap.to(fl_3, {
            rotation:"-=360",
            duration: 35,
            ease: "linear",
            repeat: -1
        });
        gsap.to(fl_15, {
            rotation:"360",
            duration: 35,
            ease: "linear",
            repeat: -1
        });

        setTimeout(() => {
            subTitle.classList.add('fadeInUp');
        }, 300);

        setTimeout(() => {
            title.classList.add('fadeInUp');
        }, 500);
    }, []);

    const girlsList = girls.map(el => {
        return <img
                key={el.src}
                src={el.src}
                className="start-girl"
                alt="Гедеон Рихтер"
                style={{width: el.w + 'em', height: el.h + 'em', top: el.t + 'em', left: el.l + 'em',}}
            />
    });

    const flowersList = flowers.map((el, idx) =>{
        return (
            <img
                key={idx}
                src={el.src}
                className="start-flower"
                alt="Гедеон Рихтер"
                style={{width: el.w + 'em', height: el.h + 'em', top: el.t + 'em', left: el.l + 'em',}}
            />
        );
    });

    return (
        <div className="start" ref={el => (start = el)}>
            <div className="start-content">
                <div className="start-subtitle title">
                    <span ref={el => (subTitle = el)}>Спецпроект</span>
                    <img src={logo} alt="Гедеон Рихтер"/>
                </div>
                <div className="start-title title" ref={el => (title = el)}>
                    <span>Как устроены женщины?</span>
                </div>
                <div className="start-text">
                    <span>Женщины устроены довольно сложно — это мы сейчас не о богатом внутреннем мире, а о физиологии. Сложность возникает из-за отсутствия знаний, которые, как правило, заканчиваются курсом школьной биологии, и стыдливости: разве можно вот так вот в открытую задавать вопросы о гениталиях? Где находится матка? Почему идут месячные? Как работают разные способы предохранения? Вместе с фармацевтической компанией «Гедеон Рихтер» и социальным проектом «Неделя женского здоровья» предлагаем вам узнать чуть больше о женской анатомии и проверить свои знания на эту тему!</span>
                </div>
                <div className="start-button">
                    <div className="btn btn-blue">
                        <span>Начать</span>
                    </div>
                </div>
                {girlsList}
                <div className="start-flowers">
                    <img className="start-flower" src={flower_1} alt="Гедеон Рихтер" ref={el => (fl_1 = el)} />
                    <img className="start-flower" src={flower_3} alt="Гедеон Рихтер" ref={el => (fl_3 = el)} />
                    <img className="start-flower" src={flower_15} alt="Гедеон Рихтер" ref={el => (fl_15 = el)} />
                    {flowersList}
                </div>
                <svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
  <circle cx="100" cy="100" r="3" />
  <circle cx="300" cy="20" r="3" />
  <path ref={el => (path = el)} d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
  <g id="rect">
    <rect width="85" height="30" fill="dodgerblue" />
    <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
  </g>
</svg>
            </div>
        </div>
    )
}
