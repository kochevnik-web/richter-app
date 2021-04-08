import React from 'react';

import Spiner from '../Spiner/Spiner';

import short from './img/short.svg';

export default function Short() {
    return (
        <div className="short">
            <Spiner number={4} />
            <img src={short} alt="Гедеон Рихтер"/>
        </div>
    )
}
