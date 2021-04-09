import React from 'react';

import Spiner from '../Spiner/Spiner';

import short from './img/shower.svg';

export default function Shower() {
    return (
        <div className="shower">
            <Spiner number={5} />
            <img src={short} alt="Гедеон Рихтер"/>
        </div>
    )
}