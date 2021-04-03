import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';

import logo from './img/logo.svg';

import girls from './girls.data';
import flowers from './flowers.data';

import flower_1 from './img/flower-1.svg';
import flower_3 from './img/flower-3.svg';
import flower_15 from './img/flower-15.svg';

export default function Start() {

    let start = useRef(null);
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
            </div>
        </div>
    )
}
