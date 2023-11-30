export const fakePoReportHeader = {
    orderNumber: 10,
    styleName: 'Test Style',
    orderCreatedAt: '2021-10-19T23:59:59.999Z',
    expectedStart: '2021-10-20T23:59:59.999Z',
    actualStart: '2021-10-21T23:59:59.999Z',
    expectedDelivery: '2021-10-30T23:59:59.999Z',
    // actualDelivery: '2021-11-04T23:59:59.999Z',
    actualProgress: 50,
    totalEstimatedCost: 1200215,
    totalActualCost: 1574211,
    offDays: [
        {
            start: '2021-10-20T23:59:59.999Z',
            end: '2021-10-21T23:59:59.999Z',
        },
        {
            start: '2021-10-22T23:59:59.999Z',
            end: '2021-10-23T23:59:59.999Z',
        },
        {
            start: '2021-10-24T23:59:59.999Z',
            end: '2021-10-25T23:59:59.999Z',
        },
        {
            start: '2021-10-26T23:59:59.999Z',
            end: '2021-10-27T23:59:59.999Z',
        },
        {
            start: '2021-10-28T23:59:59.999Z',
            end: '2021-10-29T23:59:59.999Z',
        },
    ],
};

export const fakeReportData = {
    number: '1234',
    style_name: 'style',
    expected_start: {
        date: '2021-10-28T23:59:59.999Z',
        hours: 30,
    },
    actual_start: {
        date: '2021-10-28T23:59:59.999Z',
        hours: 20,
    },
    expected_delivery: {
        date: '2021-10-24T23:59:59.999Z',
        hours: 50,
    },
    actual_progress: {
        date: '2021-10-20T23:59:59.999Z',
        hours: 20,
    },

    actual_delivery: {
        date: '2021-10-22T23:59:59.999Z',
        hours: 70,
    },
    total_estimated_cost: 500,
    total_actual_cost: 800,
};
