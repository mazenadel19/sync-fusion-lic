const fakeCuttingOrders = {
    12345: {
        number: 100,
        marker: {
            _id: '3455',
            type: 'SINGLE',
            isMainFabric: true,
            sizesCount: {
                '5dad7f1e25c8a013d597f5e1': {
                    size: '5dad7f1e25c8a013d597f5e1',
                    sizeName: '31-32',
                    count: 2,
                },
                '5dad7f5d25c8a013d597f7e8': {
                    size: '5dad7f5d25c8a013d597f7e8',
                    sizeName: '36-34',
                    count: 1,
                },
            },
        },
        rolls: {
            789: {
                rollName: 'roll1',
                shrinkageValue: 'A',
                colorShade: 'B',
                targetColor: '5daf22b7b1de141254cb136d',
                targetColorName: 'BROWN',
                type: 'OPEN',
                layersCount: 67,
            },
            788: {
                rollName: 'roll2',
                shrinkageValue: 'B',
                colorShade: 'C',
                targetColor: '5daf22b7b1de141254cb136d',
                targetColorName: 'BROWN',
                type: 'OPEN',
                layersCount: 200,
            },
            787: {
                rollName: 'roll3',
                shrinkageValue: 'B',
                colorShade: 'C',
                targetColor: '5db299cc70b6542c043bbf80',
                targetColorName: 'JEANS',
                type: 'OPEN',
                layersCount: 20,
            },
        },
    },
    12346: {
        number: 200,
        marker: {
            _id: '3456',
            type: 'SINGLE',
            isMainFabric: true,
            sizesCount: {
                '5d6a46f53f1bff1ca5406e2f': {
                    size: '5d6a46f53f1bff1ca5406e2f',
                    sizeName: 'XL',
                    count: 2,
                },
                '5d6a46f03f1bff1ca5406e2e': {
                    size: '5d6a46f03f1bff1ca5406e2e',
                    sizeName: 'L',
                    count: 1,
                },
            },
        },
        rolls: {
            800: {
                rollName: 'roll4',
                shrinkageValue: 'D',
                colorShade: 'E',
                targetColor: '611d15d23850df000e4df8e0',
                targetColorName: 'blue',
                type: 'OPEN',
                layersCount: 67,
            },
            801: {
                rollName: 'roll5',
                shrinkageValue: 'D',
                colorShade: 'E',
                targetColor: '614c28f3c68d46000e518eae',
                targetColorName: 'red',
                type: 'OPEN',
                layersCount: 200,
            },
            802: {
                rollName: 'roll6',
                shrinkageValue: 'E',
                colorShade: 'D',
                targetColor: '614c28fcc68d46000e518eaf',
                targetColorName: 'yellow',
                type: 'OPEN',
                layersCount: 20,
            },
        },
    },
};

export default fakeCuttingOrders;
