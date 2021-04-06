import React, {useEffect, useState, useRef} from 'react';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import Ansvers from './Ansvers';

export default function Level({data, children}) {

    gsap.registerPlugin(ScrollToPlugin);

    const [startAnimation, setStartAnimation] = useState(false);
    const [click, setClick] = useState(false);
    const [clx, setClx] = useState(['level']);

    let elRef = useRef(null);

    const ansverClick = id => {
        setClick(id);
    }

    useEffect(() =>{
        const t = data.id === 1 ? 1000 : 0;
        setTimeout(() => {
            setStartAnimation(true);
        }, t);
        
        setClx([...clx, 'show']);
    },[]);

    useEffect(() =>{
        if(startAnimation){
            gsap.to(window, {duration: 1, scrollTo: {y: elRef, offsetY: 0}});
        }
    },[startAnimation]);

    const ansvers = data.ansvers.map((el, indx) => {
        return <Ansvers
                    key={indx}
                    text={el.text}
                    id={indx}
                    ansverClick={(id) => ansverClick(id)}
                    click={click}
                    correct={el.correct}
                />
    });

    return (
        <div className={clx.join(' ')} ref={el => (elRef = el)}>
            <div className="level-wrap">
                {children}
                <div className="q-content">
                    <div className="q-content-text">
                        <span>
                            {data.text}
                        </span>
                    </div>
                    <div className="q-content-ansvers">
                        {ansvers}
                    </div>
                </div>
            </div>
        </div>
    )
}
