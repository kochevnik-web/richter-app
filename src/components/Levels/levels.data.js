import React from 'react';
import Rose from '../LevelComponents/Rose';
import LadyFlower from '../LevelComponents/LadyFlower';
import Test from '../Test';
import LedyFlower from '../LevelComponents/LadyFlower';

const levels = [
    {
        id: 1,
        levelName: 'level-1',
        text: '«Не подходи к ней — у нее ПМС!» Все взрослые люди слышали эту аббревиатуру, но не все знают ее значение. Так что же это такое?',
        ansvers: [
            {
                correct: false,
                text: 'Обычное состояние женщин перед началом менструального цикла, когда они сильно злятся и едят много углеводов. Причина — в гормонах',
                ans: null
            },
            {
                correct: false,
                text: 'ПМС — это последний триместр перед родами',
                ans: null
            },
            {
                correct: true,
                text: 'Разные неприятные симптомы перед началом менструального цикла, которые проявляются не у всех женщин',
                ans: 'Разнообразные симптомы — бессонница или сонливость, перемены настроения, мигрень, отёчность, чувствительность к запахам — действительно относятся к понятию «ПМС». Но у всех женщин предменструальный синдром проявляется по-разному, а у кого-то не проявляется вовсе. ПМС — не повод для шуток, а серьёзный симптом, который мешает вести привычный образ жизни. Он напрямую связан с нарушением гормональной функции организма, а это серьезная проблема, и каждый конкретный случай требует индивидуального подхода. Начинать путь избавления от ПМС следует с посещения специалиста, а изучить вопрос глубже можно с помощью информации на сайте о женском здоровье от фармацевтической компании  «Гедеон Рихтер».'
            },
        ],
        component: <Rose />
    },
    {
        id: 2,
        levelName: 'level-2',
        text: 'Слово «вагина» знакомо всем. Но правильно ли вы понимаете, что это за орган и где он находится?',
        ansvers: [
            {
                correct: false,
                text: 'Этим словом обозначаются все женские половые органы',
                ans: null
            },
            {
                correct: true,
                text: 'Вагина (влагалище) — это внутренний половой орган женщины',
                ans: 'Вагина — внутренний половой орган, а вульвой называют внешние органы. Важно помнить, что внешний вид вульвы индивидуален и может существенно отличаться у разных женщин — посмотрите хотя бы на полотна знаменитых художников.'
            },
            {
                correct: false,
                text: 'Вагина (вульва) — это внешние половые органы женщины',
                ans: null
            },
        ],
        component: <LadyFlower />
    },
    {
        id: 3,
        levelName: 'level-3',
        text: 'Начало половой жизни у женщин связывают с «потерей девственности» — разрывом девственной плевы. Если ее нет — значит, девушка не девственница?',
        ansvers: [
            {
                correct: false,
                text: 'Девственная плева есть у каждой девушки до начала половой жизни, если только у неё не было травм или она не спортсменка',
                ans: null
            },
            {
                correct: false,
                text: 'Наверное, надо задуматься о честности девушки',
                ans: null
            },
            {
                correct: true,
                text: 'Это ничего не значит. У многих женщин вообще нет девственной плевы',
                ans: 'Это верный ответ. Нередко разрыв гимена — девственной плевы — и вовсе происходит только при родах. Поэтому боль и кровь при первом сексе или же их отсутствие не говорят ничего о сексуальном опыте. Эластичность гимена и наличие в нём отверстий позволяют девушкам, не ведущим половую жизнь, пользоваться тампонами, однако девственную плеву можно повредить простым мышечным растяжением, например при занятиях спортом.'
            },
        ],
        component: <Test />
    },
    {
        id: 4,
        levelName: 'level-4',
        text: 'Где у женщин находятся придатки и действительно ли их можно застудить, как пугают бабушки тех, кто не носит рейтузы с начёсом?',
        ansvers: [
            {
                correct: false,
                text: 'Придатки — это особые отростки матки. Они требуют очень бережного отношения и реагируют на перепады температур и холодные напитки',
                ans: null
            },
            {
                correct: true,
                text: 'Народная молва называет придатками яичники и маточные (фаллопиевы) трубы, которые транспортируют в матку яйцеклетку. Чтобы действительно их застудить, нужно несколько часов пролежать на морозе — но в этом случае проблемы грозят не только придаткам.',
                ans: 'Современная доказательная медицина однозначно уверена: рассказы про придатки, воспалившиеся из-за переохлаждения, — миф. Воспалительные заболевания яичников и фаллопиевых труб (сальпингоофорит, аднексит и сальпингит) существуют на самом деле, однако возникают не из-за переохлаждения, а по причине инфицирования. Переохлаждение может спровоцировать обострение, но само по себе не будет являться причиной воспаления.'
            },
            {
                correct: false,
                text: 'Бабушки не врут. Придатки надо держать в тепле в любую погоду и время года',
                ans: null
            },
        ],
        component: <Test />
    },
];

export default levels;