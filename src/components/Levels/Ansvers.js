import React, {useEffect, useRef, useContext} from 'react';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import { Context } from "../../context";

import Ans from './Ans';

export default function Ansvers({text, id, ans, ansverClick, click, correct}) {

    const {em} = useContext(Context);

    gsap.registerPlugin(ScrollToPlugin);

    let elRef = useRef(null);

    const handleClick = id => {
        if(click === false) ansverClick(id);
    }

    let cls = ['q-content-ansver'];

    if ( click !== false ) cls.push('disabled');

    if (id === click && !correct) cls.push('error');

    if ( click !== false && correct ) cls.push('correct');

    const style = {
        transform: click !== false ? 'translate(0px, 0px)' : null
    }

    useEffect(() => {
        if(click !== false && correct){
            gsap.to(window, {
                duration: 0.5,
                delay: 0.8,
                scrollTo: {
                    y: elRef,
                    offsetY: em * 1.7
                }
            });
        }
    }, [click, correct]);

    return (
        <>
            <div
                className={cls.join(' ')}
                onClick={() => handleClick(id)}
                style={style}
                ref={el => (elRef = el)}
            >
                <span>
                    {text}
                </span>
            </div>
            {click !== false && correct ? <Ans ans={ans} /> : null }
        </>
    )
}
