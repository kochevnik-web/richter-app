import React, {useRef, useEffect} from 'react';

import gsap from 'gsap';

export default function Ansvers({text}) {

    const handleHover = e => {
        gsap.to(e.target, {
            duration: 0.3,
            scale: 1.1,
            ease: 'power3.inOut'
        });
    }

    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration: 0.3,
            scale: 1,
            ease: 'power3.inOut'
        });
    }

    return (
        <div
            className="q-content-ansver"
            onMouseEnter={e => handleHover(e)}
            onMouseLeave={e => handleHoverExit(e)}
        >
            <span>
                {text}
            </span>
        </div>
    )
}
