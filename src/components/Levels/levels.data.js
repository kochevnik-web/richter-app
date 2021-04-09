import React from 'react';
import Rose from '../LevelComponents/Rose';
import LadyFlower from '../LevelComponents/LadyFlower';
import Bathroom from '../LevelComponents/Bathroom';
import Short from '../LevelComponents/Short';
import Shower from '../LevelComponents/Shower';
import Pills from '../LevelComponents/Pills';
import Test from '../Test';

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
        component: <Bathroom />
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
        component: <Short />
    },
    {
        id: 5,
        levelName: 'level-5',
        text: 'Щепетильная для многих тема — выделения из влагалища. Стоит ли придавать им значение?',
        ansvers: [
            {
                correct: false,
                text: 'Нет — нужно просто чаще мыться и соблюдать гигиену',
                ans: null
            },
            {
                correct: false,
                text: 'Можно пользоваться ежедневными прокладками, тогда это не будет проблемой',
                ans: null
            },
            {
                correct: true,
                text: 'Выделения есть у всех, и это абсолютно нормально. А вот если они выглядят или пахнут не так, как обычно, то следует обратиться к специалисту',
                ans: 'Выделения — нормальная часть женской физиологии. На них возложена важная функция самоочищения шейки матки, поэтому специалисты говорят о вреде спринцевания — этой процедурой легко нарушить баланс микрофлоры. Не существует универсальной нормы выделений. Обычно их количество растет перед овуляцией благодаря выделению цервикальной слизи, которая помогает сперматозоидам добраться до яйцеклетки. Если цвет или запах выделений меняется, появляются зуд или жжение, необходимо без промедлений обратиться к специалисту.'
            },
        ],
        component: <Shower />
    },
    {
        id: 6,
        levelName: 'level-6',
        text: 'Представим, что у двух женщин одинаковые возраст, рост и вес. И одна из них очень довольна своими оральными контрацептивами (ОК). Значит ли это, что вторая женщина может купить себе такие же?',
        ansvers: [
            {
                correct: false,
                text: 'Все современные ОК примерно одинаковые, специалисты при назначении смотрят только на возраст и наличие беременностей. Да и рецепт не нужен. Можно покупать спокойно',
                ans: null
            },
            {
                correct: false,
                text: 'Придется посетить специалиста, чтобы получить рецепт, но на анализы тратиться не обязательно',
                ans: null
            },
            {
                correct: true,
                text: 'Даже если женщины — сёстры-близнецы, назначать ОК должен только специалист, учитывая результаты анализов, состояние здоровья, репродуктивные планы и множество других факторов',
                ans: 'Возраст и вес при подборе ОК играют большую роль, поэтому всегда надо помнить: ни один оральный контрацептив не универсален. Только квалифицированный специалист может учесть все нюансы и назначить правильный препарат, который сохранит здоровье и не даст побочек. Если ОК назначены грамотно — это не только метод контрацепции, с их помощью можно облегчить ПМС и уменьшить выраженность боли. Но важно также знать, что существуют абсолютные противопоказания к приему оральных контрацептивов по состоянию здоровья.'
            },
        ],
        component: <Pills />
    },
    {
        id: 7,
        levelName: 'level-7',
        text: 'У женщины ничего не болит, менструация приходит как по часам. Нужно ли посещать специалиста или можно не ходить к нему пару лет?',
        ansvers: [
            {
                correct: false,
                text: 'Нужно — раз в 3 года минимум',
                ans: null
            },
            {
                correct: false,
                text: 'Посещать гинеколога нужно при беременности',
                ans: null
            },
            {
                correct: true,
                text: 'Женщина в любом возрасте должна проходить гинекологический осмотр раз в 6–12 месяцев',
                ans: 'Посещать специалистов нужно не реже раза в год — об этом говорится даже в <b>Приказе Минздрава России</b>. Минимальный перечень процедур при таких визитах: профессиональный осмотр, анализ мазка на микрофлору, онкоцитологическое исследование материала, взятого с поверхности шейки матки. Исчерпывающей картины состояния женского здоровья такие исследования не дадут, но вовремя заметить тревожные изменения помогут.'
            },
        ],
        component: <Test />
    },
    {
        id: 8,
        levelName: 'level-8',
        text: 'Правда ли, что количество яйцеклеток ограниченно? Если откладывать появление ребенка, они могут закончиться, и женщина не забеременеет.',
        ansvers: [
            {
                correct: true,
                text: 'Это правда — количество яйцеклеток, способных к оплодотворению, ограниченно и закладывается у девочки еще во внутриутробный период',
                ans: 'Овариальный резерв, он же фолликулярный (яичниковый) запас — это количество яйцеклеток, которые могут быть оплодотворены. Их запас конечен и в течение жизни женщины не компенсируется и не пополняется. У новорожденной девочки их около 2 млн, к периоду полового созревания остается от 200 до 400 тыс., после 30 лет их количество также постоянно идет на убыль. У некоторых женщин овариальный резерв изначально снижен. Сегодня существуют достоверные способы проверки доступного запаса яйцеклеток для того, чтобы спланировать материнство.'
            },
            {
                correct: false,
                text: 'Нет, это миф. Яйцеклетки возобновляются перед каждым циклом',
                ans: null
            },
            {
                correct: false,
                text: 'Количество яйцеклеток снижается только к 60 годам, ближе к возрасту менопаузы. До этого момента нет никакого повода для беспокойства',
                ans: null
            },
        ],
        component: <Test />
    },
    {
        id: 9,
        levelName: 'level-9',
        text: 'Последний вопрос — о сексуальности. Мы привыкли считать, что у женщин есть два вида оргазма: клиторальный и вагинальный. Так ли это на самом деле?',
        ansvers: [
            {
                correct: false,
                text: 'Конечно! Причем добиться вагинального оргазма довольно сложно, и чаще всего он случается у женщин после родов',
                ans: null
            },
            {
                correct: false,
                text: 'Да, так и есть. Кстати, только вагинальный оргазм можно считать «настоящим», и если женщина его не испытывает, то с ее физиологией что-то не так',
                ans: null
            },
            {
                correct: true,
                text: 'Не так. На самом деле вагинальный оргазм — тоже клиторальный, просто происходит от стимуляции внутренней части клитора, а не его головки',
                ans: 'Раньше действительно считалось, что существует два вида оргазма, зависящих от разных видов стимуляции. Сейчас мы знаем, что клитор — не маленькая «кнопочка», а Y-образный орган со сложной анатомической структурой. Основная его часть находится внутри тела, поэтому при любом типе стимуляции главным героем остается именно он, и никакого изолированно вагинального оргазма не бывает. Индивидуальные ощущения могут быть очень разными и, конечно, сами по себе не свидетельствуют о какой-либо зрелости и не могут быть поводом для любой дискриминации.'
            },
        ],
        component: <Test />
    },
];

export default levels;