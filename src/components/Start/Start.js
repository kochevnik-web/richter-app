import React, {useRef, useEffect, useState} from 'react';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

import logo from './img/logo.svg';

import girls from './girls.data';
import flowers from './flowers.data';

import flower_1 from './img/flower-1.svg';
import flower_3 from './img/flower-3.svg';
import flower_15 from './img/flower-15.svg';
import flower_16 from './img/flower-16.svg';
import flower_17 from './img/flower-17.svg';

export default function Start() {

    gsap.registerPlugin(MotionPathPlugin);

    const [startGame, setStartGame] = useState(false);
    const [fide_1, setFide_1] = useState(false);
    const [fide_2, setFide_2] = useState(false);

    let start = useRef(null);
    let path = useRef(null);
    let path_2 = useRef(null);
    let fl_1 = useRef(null);
    let fl_3 = useRef(null);
    let fl_15 = useRef(null);
    let fl_16 = useRef(null);
    let fl_17 = useRef(null);

    const handleStartGame = () => {
        setStartGame(true);
    }

    //animation flowars
    useEffect(() => {
        gsap.to(start, {
            duration: 1.2,
            opacity: 1,
            ease: "power3.inOut"
        });
        gsap.to(fl_1, {
            rotation:"360",
            duration: 35,
            ease: "linear",
            repeat: -1
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

    }, []);

    //animation for texts
    useEffect(() => {
        setTimeout(() => {
            setFide_1(true);
        }, 500);

        setTimeout(() => {
            setFide_2(true);
        }, 700);
    },[]);

    //animation flowers for button click
    useEffect(() =>{
        if(startGame) {
            gsap.to(fl_16, {
                duration: 2,
                scale: 1.8,
                ease: "power2.out",
                motionPath:{
                  path: path,
                  align: path,
                  alignOrigin: [0.5, 0.5]
                }
            });
            gsap.to(fl_16, {
                delay: 1,
                duration: 1,
                opacity: 0,
                ease: "liner"
            });
            gsap.to(fl_17, {
                duration: 2,
                scale: 1.8,
                ease: "power2.out",
                motionPath:{
                  path: path_2,
                  align: path_2,
                  alignOrigin: [0.5, 0.5]
                }
            });
            gsap.to(fl_17, {
                delay: 1,
                duration: 1,
                opacity: 0,
                ease: "liner"
            });
        }
    },[startGame])

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
                    <span className={fide_1 ? 'fadeInUp' : null}>Спецпроект</span>
                    <img src={logo} alt="Гедеон Рихтер"/>
                </div>
                <div className="start-title title">
                    <span className={fide_2 ? 'fadeInUp' : null}>Как устроены женщины?</span>
                </div>
                <div className="start-text">
                    <span>Женщины устроены довольно сложно — это мы сейчас не о богатом внутреннем мире, а о физиологии. Сложность возникает из-за отсутствия знаний, которые, как правило, заканчиваются курсом школьной биологии, и стыдливости: разве можно вот так вот в открытую задавать вопросы о гениталиях? Где находится матка? Почему идут месячные? Как работают разные способы предохранения? Вместе с фармацевтической компанией «Гедеон Рихтер» и социальным проектом «Неделя женского здоровья» предлагаем вам узнать чуть больше о женской анатомии и проверить свои знания на эту тему!</span>
                </div>
                <div className="start-button">
                    <div className="btn btn-blue" onClick={handleStartGame}>
                        <span>Начать</span>
                    </div>
                </div>
                {girlsList}
                <div className="start-flowers">
                    <img className="start-flower" src={flower_1} alt="Гедеон Рихтер" ref={el => (fl_1 = el)} />
                    <img className="start-flower" src={flower_3} alt="Гедеон Рихтер" ref={el => (fl_3 = el)} />
                    <img className="start-flower" src={flower_15} alt="Гедеон Рихтер" ref={el => (fl_15 = el)} />
                    <img className="start-flower" src={flower_16} alt="Гедеон Рихтер" ref={el => (fl_16 = el)} />
                    <img className="start-flower" src={flower_17} alt="Гедеон Рихтер" ref={el => (fl_17 = el)} />

                    {flowersList}

                    <svg viewBox="-20 0 557 190" id="path-1" className="path-move">
                        <path ref={el => (path = el)} d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
                    </svg>

                    <svg viewBox="-20 0 557 190" id="path-2" className="path-move">
                        <path ref={el => (path_2 = el)} d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}
