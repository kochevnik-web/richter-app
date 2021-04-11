import React, {useContext, useRef, useEffect, useState} from 'react';

import { Context } from "../../context";

import data from './final.data';
import Shers from '../Shers/Shers';

import logo from '../Start/img/logo.svg';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Final() {

    const {count} = useContext(Context);

    gsap.registerPlugin(ScrollToPlugin);

    const [startAnimation, setStartAnimation] = useState(false);
    const [clx, setClx] = useState(['final']);

    let elRef = useRef(null);

    useEffect(() =>{
        setTimeout(() => {
            setStartAnimation(true);
        }, 500);
        
        setClx([...clx, 'show']);
    },[]);

    useEffect(() =>{
        if(startAnimation){
            gsap.to(window, {duration: 1, scrollTo: {y: elRef, offsetY: 0}});
        }
    },[startAnimation]);

    let dataFinal = data[0];

    if (count >= 4 ) {
        dataFinal = data[1];
    }

    if (count >= 7 ) {
        dataFinal = data[2];
    }

    return (
        <div className={clx.join(' ')} ref={el => (elRef = el)}>
            <div className="final-logo">
                <img src={logo} alt="Гедеон Рихтер" />
            </div>
            <div className="final-wrap">
                <div className="final-img">
                    <img src={dataFinal.img} alt="Гедеон Рихтер" />
                </div>
                <div className="final-content">
                    <div className="title final-title">
                        <span>{dataFinal.title}</span>
                    </div>
                    <div className="final-description" dangerouslySetInnerHTML={{__html: dataFinal.text}}></div>
                </div>
                <div className="final-buttons">
                    <a href="#" className="btn btn-blue">
                        <span>Хочу знать больше</span>
                    </a>
                    <div className="btn btn-white" onClick={() => window.location.reload()}>
                        <span>Пройти еще раз</span>
                    </div>
                </div>
                <Shers />
            </div>
        </div>
    )
}
