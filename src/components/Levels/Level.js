import React, {useEffect, useState, useRef} from 'react';
import useScroll from '../../scroll';

export default function Level({data, children}) {

    let [executeScroll, elRef] = useScroll();
    const [startAnimation, setStartAnimation] = useState(false);
    const [clx, setClx] = useState(['level']);

    useEffect(() =>{
        const t = data.id === 1 ? 1500 : 0;
        setTimeout(() => {
            setStartAnimation(true);
        }, t);

        setClx([...clx, 'show']);
    },[]);

    useEffect(() =>{
        if(startAnimation){
            executeScroll();
        }
    },[startAnimation]);

    return (
        <div className={clx.join(' ')} ref={elRef}>
            <div className="level-wrap">
                {children}
                <div className="q-content">
                    <div className="q-content-text">
                        <span>
                            «Не подходи к ней — у нее ПМС!» Все взрослые люди слышали эту аббревиатуру, но не все знают ее значение. Так что же это такое?
                        </span>
                    </div>
                    <div className="q-content-ansvers">
                        <div  className="q-content-ansver">
                            <span>Обычное состояние женщин перед началом менструального цикла, когда они сильно злятся и едят много углеводов. Причина — в гормонах</span></div>
                        <div  className="q-content-ansver">
                            <span>ПМС — это последний триместр перед родами</span></div>
                        <div  className="q-content-ansver">
                            <span>Разные неприятные симптомы перед началом менструального цикла, которые проявляются не у всех женщин</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
