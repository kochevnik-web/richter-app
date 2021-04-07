import React, {useRef, useEffect} from 'react';

import gsap from 'gsap';

export default function NextButton({click}) {
    let but = useRef(null);

    useEffect(() => {
        if(click !== false){
            gsap.to(but, {
                delay: 1.2,
                direction: 0.6,
                opacity: 1,
                visibility: 'inherit',
                ease: "power3.in"
            });
        }
    }, [click])

    return (
        <div className="next-button" ref={el => (but = el)} onClick={() => console.log(1)}>
            <span>
                Следующий вопрос
            </span>
        </div>
    )
}
