import React from 'react';

import gsap from 'gsap';

import Ans from './Ans';

export default function Ansvers({text, id, ans, ansverClick, click, correct}) {

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
