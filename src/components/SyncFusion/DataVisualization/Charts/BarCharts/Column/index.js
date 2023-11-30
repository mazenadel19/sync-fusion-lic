import { Browser } from '@syncfusion/ej2-base';
import {
    Category,
    ChartComponent,
    ColumnSeries,
    DataLabel,
    Highlight,
    Inject,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import useSyncFusionPrint from '../../../../hooks/useSyncFusionPrint';
import styles from '../../../../styles.module.css';
export const Column = ({
    primaryXAxis = {},
    primaryYAxis = {},
    title = '',
    seriesDirectives = [],
    showPrint,
    onPointClick,
}) => {
    const { printClickHandler, chartInstance } = useSyncFusionPrint();

    return (
        <div className={`${styles.control_pane} ${styles.column}`}>
            <section className={styles.control_actions}>
                {showPrint && (
                    <button
                        onClick={printClickHandler}
                    >
                        print
                    </button>
                )}
            </section>
            <section className={styles.control_section}>
                <ChartComponent
                    id={'xas5'}
                    ref={chartInstance}
                    style={{
                        textAlign: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                    legendSettings={{
                        enableHighlight: true,
                    }}
                    primaryXAxis={{
                        labelIntersectAction: Browser.isDevice
                            ? 'None'
                            : 'Trim',
                        labelRotation: Browser.isDevice ? -45 : 0,
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                        ...primaryXAxis,
                    }}
                    primaryYAxis={{
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        ...primaryYAxis,
                    }}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{
                        enable: true,
                        // eslint-disable-next-line no-template-curly-in-string
                        header: '<b>${point.tooltip}</b>',
                        shared: true,
                    }}
                    pointClick={onPointClick}
                    title={title}
                >
                    <Inject
                        services={[
                            ColumnSeries,
                            Legend,
                            Tooltip,
                            Category,
                            DataLabel,
                            Highlight,
                        ]}
                    />
                    <SeriesCollectionDirective>
                        {seriesDirectives.map((directive) => (
                            <SeriesDirective
                                key={directive.name}
                                tooltipMappingName='toolTipMappingName'
                                xName='x'
                                columnSpacing={0.1}
                                yName='y'
                                {...directive}
                            />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </section>
        </div>
    );
};
