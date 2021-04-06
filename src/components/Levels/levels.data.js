import React from 'react';
import Rose from '../LevelComponents/Rose';
import Test from '../Test';

const levels = [
    {
        id: 1,
        levelName: 'level-1',
        text: '«Не подходи к ней — у нее ПМС!» Все взрослые люди слышали эту аббревиатуру, но не все знают ее значение. Так что же это такое?',
        ansvers: [
            {
                correct: false,
                text: 'Обычное состояние женщин перед началом менструального цикла, когда они сильно злятся и едят много углеводов. Причина — в гормонах'
            },
            {
                correct: false,
                text: 'ПМС — это последний триместр перед родами'
            },
            {
                correct: true,
                text: 'Разные неприятные симптомы перед началом менструального цикла, которые проявляются не у всех женщин'
            },
        ],
        component: <Rose />
    },
    {
        id: 2,
        levelName: 'level-2',
        text: 'Слово «вагина» знакомо всем. Но правильно ли вы понимаете, что это за орган и где он находится?',
        component: <Test />
    },
];

export default levels;