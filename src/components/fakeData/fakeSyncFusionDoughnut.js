import { Browser } from '@syncfusion/ej2-base';

export const doughnutDataSource = [
    { x: 'Chrome', y: 61.3, text: 'Chrome: 61.3%' },
    {
        x: 'Safari',
        y: 24.6,
        text: Browser.isDevice ? 'Safari: <br> 24.6%' : 'Safari: 24.6%',
    },
    { x: 'Edge', y: 5.0, text: 'Edge: 5.0%' },
    {
        x: 'Samsung Internet',
        y: 2.7,
        text: Browser.isDevice
            ? 'Samsung <br> Internet: 2.7%'
            : 'Samsung Internet: 2.7%',
    },
    {
        x: 'Firefox',
        y: 2.6,
        text: Browser.isDevice ? 'Firefox: <br> 2.6%' : 'Firefox: 2.6%',
    },
    {
        x: 'Others',
        y: 3.6,
        text: Browser.isDevice ? 'Others: <br> 3.6%' : 'Others: 3.6%',
    },
];
