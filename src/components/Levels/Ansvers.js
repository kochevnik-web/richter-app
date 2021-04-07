import React, {useRef, useEffect} from 'react';

import gsap from 'gsap';

import Ans from './Ans';

export default function Ansvers({text, id, ans, ansverClick, click, correct}) {

    const handleHover = e => {
        if(click === false) {
            gsap.to(e.target, {
                duration: 0.3,
                scale: 1.1,
                ease: 'power3.inOut'
            });
        }
    }

    const handleHoverExit = e => {
        if(click === false) {
            gsap.to(e.target, {
                duration: 0.3,
                scale: 1,
                ease: 'power3.inOut'
            });
        }
    }

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

    return (
        <>
            <div
                className={cls.join(' ')}
                onMouseEnter={e => handleHover(e)}
                onMouseLeave={e => handleHoverExit(e)}
                onClick={() => handleClick(id)}
                style={style}
            >
                <span>
                    {text}
                </span>
            </div>
            {click !== false && correct ? <Ans ans={ans} /> : null }
        </>
    )
}
