import {
    Category,
    ChartComponent,
    Highlight,
    Inject,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    StackingBarSeries,
    Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import styles from '../../../../styles.module.css';

export const StackedBar100 = ({ dataSource, tooltipRender }) => {

    const keys = Object.keys(dataSource.data[0]);
    const seriesDirectives = keys
        .filter((key) => key !== 'x')
        .map((key, index) => (
            <SeriesDirective
                key={index}
                dataSource={dataSource.data}
                xName='x'
                yName={key}
                name={dataSource.yNames[index]}
                border={{ width: 1, color: 'white' }}
                columnWidth={0.6}
                type='StackingBar100'
            />
        ));

    return (
        <div className={styles.control_pane}>
            <div className={styles.control_section}>
                <ChartComponent
                    id={'idasda'}
                    style={{ textAlign: 'center' }}
                    legendSettings={{ enableHighlight: true }}
                    primaryXAxis={{
                        valueType: 'Category',
                        visible: false,
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                    }}
                    primaryYAxis={{
                        edgeLabelPlacement: 'Shift',
                        visible: false,
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                    }}
                    width='100%'
                    height='250px'
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{
                        enable: true,
                        // eslint-disable-next-line no-template-curly-in-string
                        format: '<b>${point.y} (${point.percentage}%)</b>',
                    }}
                    tooltipRender={tooltipRender}
                >
                    <Inject
                        services={[
                            StackingBarSeries,
                            Legend,
                            Tooltip,
                            Category,
                            Highlight,
                        ]}
                    />
                    <SeriesCollectionDirective>
                        {seriesDirectives}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};
