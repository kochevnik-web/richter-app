import React from 'react';
import {FacebookShareButton,TwitterShareButton,VKShareButton} from "react-share";

import data from './shers.data';

import imgShare from '../Final/img/final-1.svg';

export default function Shers() {

    const title = 'Гедеон Рихтер';
    const desc  = 'Гедеон Рихтер';
    const url   = 'https://medialeaks.ru/richter/';

    return (
        <div className="Shers">
            {data.map((el) => {
                return (
                    <span
                        key={el.id}
                        className={"share-btn share-btn-" + el.id}
                    >
                        {el.id === 'vk' && <VKShareButton url={url} image={imgShare}>
                            <svg viewBox={el.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={el.d} fill="white"/>
                            </svg>
                        </VKShareButton>}

                        {el.id === 'tw' && <TwitterShareButton url={url} image={imgShare} title={title}>
                            <svg viewBox={el.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={el.d} fill="white"/>
                            </svg>
                        </TwitterShareButton>}

                        {el.id === 'fb' && <FacebookShareButton url={url} image={imgShare} title={title}>
                            <svg viewBox={el.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d={el.d} fill="white"/>
                            </svg>
                        </FacebookShareButton>}
                    </span>
                )
            })}
        </div>
    )
}