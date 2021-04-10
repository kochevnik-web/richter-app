import React from 'react';

import Spiner from '../Spiner/Spiner';

import watch from './img/watch.svg';

export default function Cross() {
    return (
        <div className="watch">
            <Spiner number={8} />
            <img src={watch} alt="Гедеон Рихтер"/>
        </div>
    )
}