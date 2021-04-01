import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';

export default function Start() {

    let start = useRef(null);

    useEffect(() => {
        gsap.to(start, {
            duration: 0.8,
            opacity: 1,
            ease: "power3.inOut"
        });
    }, []);

    return (
        <div className="start" ref={el => (start = el)}>
            Start
        </div>
    )
}
