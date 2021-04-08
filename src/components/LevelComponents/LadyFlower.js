import React from 'react';

import Spiner from '../Spiner/Spiner';

import ladyflower from './img/ladyflower.svg';

export default function LadyFlower() {
    return (
        <div className="lady-flower">
            <Spiner number={2} />
            <img src={ladyflower} alt="Гедеон Рихтер"/>
        </div>
    )
}
