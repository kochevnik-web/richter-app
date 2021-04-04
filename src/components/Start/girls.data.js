import girl_1 from './img/girl-1.svg';
import girl_2 from './img/girl-2.svg';
import girl_3 from './img/girl-3.svg';
import girl_4 from './img/girl-4.svg';

const girls = [
    {
        src: girl_1,
        mobile: false,
        style: {
            width: '91.7em',
            height: '52.4em',
            top: '35em',
            left: '16.8em'
        }
    },
    {
        src: girl_2,
        mobile: true,
        styleMobile: {
            width: '100%',
            height: 'auto',
            top: '26.6em',
            left: 0,
        },
        style: {
            width: '58.4em',
            height: '64.3em',
            top: '11.5em',
            left: '113.8em'
        }
    },
    {
        src: girl_3,
        mobile: false,
        style: {
            width: '36.8em',
            height: '60.2em',
            top: '100.5em',
            left: 0,
        }
    },
    {
        src: girl_4,
        mobile: false,
        style: {
            width: '53.3em',
            height: '62.4em',
            top: '77em',
            left: '136.5em',
        }
    }
];

export default girls;