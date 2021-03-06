import React, {useRef, useEffect} from 'react';

import gsap from 'gsap';

export default function Spiner({number}) {

    let spin = useRef(null);

    useEffect(() => {
        gsap.to(spin, 17, {
            rotation: 360,
            repeat: -1,
            ease: "linear"
        });
    }, [])

    return (
        <div className="spiner">
            <span>{number}</span>
            <svg width="98" height="98" viewBox="0 0 98 95" xmlns="http://www.w3.org/2000/svg" ref={el => (spin = el)}>
                <path d="M37.914 8.04974C42.0026 -1.865 56.0453 -1.865 60.1339 8.04974C62.4712 13.7176 68.7003 16.7174 74.5888 15.0109C84.8897 12.0257 93.6452 23.0048 88.4427 32.3831C85.4687 37.7443 87.0072 44.4848 92.0128 48.0247C100.769 54.217 97.6444 67.9076 87.0684 69.6875C81.0226 70.7049 76.7119 76.1104 77.0653 82.231C77.6834 92.9379 65.0314 99.0308 57.0458 91.8719C52.4808 87.7794 45.567 87.7794 41.002 91.8719C33.0165 99.0308 20.3644 92.9379 20.9826 82.231C21.3359 76.1104 17.0253 70.7049 10.9794 69.6875C0.403473 67.9076 -2.72132 54.217 6.03503 48.0247C11.0407 44.4848 12.5791 37.7443 9.60511 32.3831C4.40266 23.0048 13.1581 12.0257 23.459 15.0109C29.3476 16.7174 35.5767 13.7176 37.914 8.04974Z" />
            </svg>
        </div>
    )
}
