import React, {useContext} from 'react';

import { Context } from "../../context";

import data from './final.data';

import logo from '../Start/img/logo.svg';

export default function Final() {

    const {count} = useContext(Context);

    let dataFinal = data[0];

    return (
        <div className="final">
            <div className="final-logo">
                <img src={logo} alt="Гедеон Рихтер" />
            </div>
            <div className="final-wrap">
                <div className="final-img">
                    <img src={dataFinal.img} alt="Гедеон Рихтер" />
                </div>
                <div className="final-content">
                    <div className="title final-title">
                        <span>{dataFinal.title}</span>
                    </div>
                    <div className="final-description" dangerouslySetInnerHTML={{__html: dataFinal.text}}></div>
                </div>
                <div className="final-buttons">
                    <a href="#" className="btn btn-blue">
                        <span>Хочу знать больше</span>
                    </a>
                    <div className="btn btn-white">
                        <span>Пройти еще раз</span>
                    </div>
                </div>
                <div className="final-social">

                </div>
            </div>
        </div>
    )
}
