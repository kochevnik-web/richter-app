import React from 'react';

import Spiner from '../Spiner/Spiner';

import cross from './img/cross.svg';

export default function Cross() {
    return (
        <div className="cross">
            <Spiner number={7} />
            <img src={cross} alt="Гедеон Рихтер"/>
        </div>
    )
}