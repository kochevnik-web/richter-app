import React, {useRef, useEffect} from 'react';

import scream_bg from './img/scream-bg.svg';
import scream_1_src from './img/scream-1.svg';
import scream_2_src from './img/scream-2.svg';

import Spiner from '../Spiner/Spiner';

import gsap from 'gsap';


export default function Scream() {

    let scream_1 = useRef(null);
    let scream_2 = useRef(null);

    useEffect(() => {
        gsap.set(scream_1, {rotation: -4})
        gsap.to(scream_1, 1.5, {
            rotation: 4,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });

        gsap.set(scream_2, {rotation: -5})
        gsap.from(scream_2, 1.5, {
            rotation: 5,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });
    }, []);

    return (
        <div className="scream">
            <Spiner number={9} />
            <img className="scream-bg" src={scream_bg} alt="Гедеон Рихтер"/>
            <img className="scream-1 scream-item" src={scream_1_src} alt="Гедеон Рихтер" ref={el => (scream_1 = el)}/>
            <img className="scream-2 scream-item" src={scream_2_src} alt="Гедеон Рихтер"ref={el => (scream_2 = el)}/>
        </div>
    )
}