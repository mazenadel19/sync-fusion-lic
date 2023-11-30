export const resources = [
    { id: 1, name: 'Ahmed Nounou' },
    { id: 2, name: 'Shahd Yaser' },
    { id: 3, name: 'Mariam Emile' },
    { id: 4, name: 'Mohamed Shafei' },
    { id: 5, name: 'Ibrahim Nader' },
    { id: 6, name: 'Mostafa Waheed' },
    { id: 8, name: 'Abdulwahab Mahmoud' },
    { id: 9, name: 'Mazen Emam' },
    { id: 12, name: 'Hazem Elsayed' },
];

export const dataSource = [
    {
        id: 1,
        name: 'Project initiation',
        startDate: new Date('03/29/2019'),
        endDate: new Date('04/21/2019'),
        child: [
            {
                id: 2,
                name: 'Identify site location',
                startDate: new Date('03/29/2019'),
                duration: 2,
                progress: 30,
                work: 16,
                resourceInfo: [{ id: 1, unit: 70 }, 6],
            },
            {
                id: 3,
                name: 'Perform soil test',
                startDate: new Date('03/29/2019'),
                duration: 4,
                resourceInfo: [2, 3, 5],
                work: 96,
            },
            {
                id: 4,
                name: 'Soil test approval',
                startDate: new Date('03/29/2019'),
                duration: 1,
                work: 16,
                resourceInfo: [8, { id: 9, unit: 50 }],
                progress: 30,
            },
        ],
    },
    {
        id: 5,
        name: 'Project estimation',
        startDate: new Date('03/29/2019'),
        endDate: new Date('04/21/2019'),
        child: [
            {
                id: 6,
                name: 'Develop floor plan for estimation',
                startDate: new Date('03/29/2019'),
                duration: 3,
                progress: 30,
                resourceInfo: [{ id: 4, unit: 50 }],
                work: 30,
            },
            {
                id: 7,
                name: 'List materials',
                startDate: new Date('04/01/2019'),
                duration: 3,
                work: 48,
                resourceInfo: [4, 8],
            },
            {
                id: 8,
                name: 'Estimation approval',
                startDate: new Date('04/01/2019'),
                duration: 2,
                work: 60,
                resourceInfo: [12, { id: 5, unit: 70 }],
            },
        ],
    },
    {
        id: 9,
        name: 'Sign contract',
        startDate: new Date('04/01/2019'),
        duration: 1,
        progress: 30,
        resourceInfo: [12],
        work: 24,
    },
];

export const columnsDirective = [
    { field: 'id', visible: false },
    {
        field: 'name',
        width: '180',
    },
    {
        field: 'resourceInfo',
        width: '180',
    },
    {
        field: 'work',
        width: '110',
    },
    {
        field: 'duration',
        width: '100',
    },
    {
        field: 'type',
        width: '110',
    },
];
