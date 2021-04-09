import React, {useRef, useEffect} from 'react';

import pills_bg from './img/pills-bg.svg';
import pills_img from './img/pills.svg';

import Spiner from '../Spiner/Spiner';

import gsap from 'gsap';


export default function Rose() {

    let pills = useRef(null);

    useEffect(() => {
        gsap.set(pills, {rotation: -4})
        gsap.to(pills, 1.5, {
            rotation: 4,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });
    }, []);

    return (
        <div className="pills">
            <Spiner number={6} />
            <img className="pills-bg" src={pills_bg} alt="Гедеон Рихтер"/>
            <img className="pills-item" src={pills_img} alt="Гедеон Рихтер" ref={el => (pills = el)}/>
        </div>
    )
}
