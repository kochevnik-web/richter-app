import React, {useRef, useEffect} from 'react';

import gsap from 'gsap';

export default function Ans({ans}) {
    let text = useRef(null);
    let textChild = useRef(null);

    useEffect(() => {
        gsap.to(text, {
            duration: 1,
            opacity: 1,
            height: textChild.getBoundingClientRect().height,
            ease: "power3.In",
            autoAlpha: 1,
        });
    }, []);

    return (
        <div className="q-content-ans" ref={el => (text = el)}>
            <span ref={el => (textChild = el)}>
                {ans}
            </span>
        </div>
    )
}
