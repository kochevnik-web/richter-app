import React from 'react';
import {FacebookShareButton,TwitterShareButton,VKShareButton} from "react-share";

import data from './shers.data';

export default function Shers() {

    const title = 'Спецпроект. Как устроены женщины?';
    // const desc  = 'Женщины устроены довольно сложно — это мы сейчас не о внутреннем мире, а о физиологии. Вместе с компанией «Гедеон Рихтер» предлагаем вам проверить свои знания на эту тему!';
    const url   = 'https://medialeaks.ru/what-are-girls-made-of/';
    // "homepage": "https://medialeaks.ru/what-are-girls-made-of/",

    let imgShare = process.env.PUBLIC_URL+ '/rech-app.pmg';

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