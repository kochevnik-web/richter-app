import React, {useContext, useRef, useEffect, useState} from 'react';

import { Context } from "../../context";

import data from './final.data';
import Shers from '../Shers/Shers';

import logo from '../Start/img/logo.svg';
import flower_1 from './img/flower-1.svg';
import flower_2 from './img/flower-2.svg';
import flower_3 from './img/flower-3.svg';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default function Final() {

    const {count} = useContext(Context);

    gsap.registerPlugin(ScrollToPlugin);

    const [startAnimation, setStartAnimation] = useState(false);
    const [clx, setClx] = useState(['final', 'points-' + count]);

    let elRef = useRef(null);

    useEffect(() =>{
        if(startAnimation){
            gsap.to(window, {duration: 1, scrollTo: {y: elRef, offsetY: 0}});
        }
    },[startAnimation]);

    let dataFinal = data[0];

    if (count >= 4 ) {
        dataFinal = data[1];
    }

    if (count >= 8 ) {
        dataFinal = data[2];
    }

    useEffect(() =>{
        setTimeout(() => {
            setStartAnimation(true);
        }, 500);
        
        setClx([...clx, 'show']);
    },[]);

    return (
        <div className={clx.join(' ')} ref={el => (elRef = el)}>
            <div className="final-logo">
                <img src={logo} alt="Гедеон Рихтер" />
            </div>
            <img className={'final-flower final-flower-1' + ' points-' + dataFinal.class} src={flower_1} alt="Гедеон Рихтер" />
            <img className={'final-flower final-flower-2' + ' points-' + dataFinal.class} src={flower_2} alt="Гедеон Рихтер" />
            <img className={'final-flower final-flower-3' + ' points-' + dataFinal.class} src={flower_3} alt="Гедеон Рихтер" />
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
                    <a href="https://www.w-health.ru/?utm_source=medialeaks&utm_campaign=njz_2021" className="btn btn-blue" target="_blank" rel="noreferrer">
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
