import React from 'react';

import Spiner from '../Spiner/Spiner';

import bathroom from './img/bathroom.svg';

export default function Bathroom() {
    return (
        <div className="bathroom">
            <Spiner number={3} />
            <img src={bathroom} alt="Гедеон Рихтер"/>
        </div>
    )
}
