import React, {useRef, useEffect} from 'react';

import rose_bg from './img/rose-bg.svg';
import rose_1_src from './img/rose-1.svg';
import rose_2_src from './img/rose-2.svg';

import Spiner from '../Spiner/Spiner';

import gsap from 'gsap';


export default function Rose() {

    let rose_1 = useRef(null);
    let rose_2 = useRef(null);

    useEffect(() => {
        gsap.set(rose_1, {rotation: -4})
        gsap.to(rose_1, 1.5, {
            rotation: 4,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });

        gsap.set(rose_2, {rotation: -4})
        gsap.from(rose_2, 1.5, {
            rotation: 4,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });
    }, []);

    return (
        <div className="rose">
            <Spiner />
            <img className="rose-bg" src={rose_bg} alt="Гедеон Рихтер"/>
            <img className="rose-1 rose-item" src={rose_1_src} alt="Гедеон Рихтер" ref={el => (rose_1 = el)}/>
            <img className="rose-2 rose-item" src={rose_2_src} alt="Гедеон Рихтер"ref={el => (rose_2 = el)}/>
        </div>
    )
}
