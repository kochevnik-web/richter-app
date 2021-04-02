import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';

import logo from './img/logo.svg';

import girls from './girls.data';

export default function Start() {

    let start = useRef(null);

    useEffect(() => {
        gsap.to(start, {
            duration: 1.2,
            opacity: 1,
            ease: "power3.inOut"
        });
    }, []);

    const girlsList = girls.map(el => {
        return <img
                key={el.src}
                src={el.src}
                className="start-girl"
                alt="Гедеон Рихтер"
                style={{width: el.w + 'em', height: el.h + 'em', top: el.t + 'em', left: el.l + 'em',}}
            />
    })

    return (
        <div className="start" ref={el => (start = el)}>
            <div className="start-content">
                <div className="start-subtitle title">
                    <span>Спецпроект</span>
                    <img src={logo} alt="Гедеон Рихтер"/>
                </div>
                <div className="start-title title">
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
            </div>
        </div>
    )
}
