import {
    ChartComponent,
    DateTime,
    Highlight,
    Inject,
    Legend,
    SeriesCollectionDirective,
    SeriesDirective,
    SplineAreaSeries,
    Tooltip,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import useSyncFusionPrint from '../../../../hooks/useSyncFusionPrint';
import styles from '../../../../styles.module.css';

export const SplineArea = ({
    primaryXAxis = {},
    primaryYAxis = {},
    title = '',
    seriesDirectives = [],
    showPrint,
    onPointClick,
}) => {
    const { printClickHandler, chartInstance } = useSyncFusionPrint();

    return (
        <div className={`${styles.control_pane} ${styles.spline_area}`}>
            <div className={styles.control_actions}>
                {showPrint && (
                    <button
                        onClick={printClickHandler}
                    >
                        print
                    </button>
                )}
            </div>
            <div className={styles.control_section}>
                <ChartComponent
                    id={'splineArea1'}
                    ref={chartInstance}
                    pointClick={onPointClick}
                    style={{
                        textAlign: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                    primaryXAxis={{
                        majorGridLines: { width: 0 },
                        edgeLabelPlacement: 'Shift',
                        ...primaryXAxis,
                    }}
                    primaryYAxis={{
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 },
                        ...primaryYAxis,
                    }}
                    legendSettings={{
                        enableHighlight: true,
                    }}
                    chartArea={{ border: { width: 0 } }}
                    title={title}
                    tooltip={{ enable: true }}
                >
                    <Inject
                        services={[
                            SplineAreaSeries,
                            DateTime,
                            Tooltip,
                            Legend,
                            Highlight,
                        ]}
                    />
                    <SeriesCollectionDirective>
                        {seriesDirectives.map((directive) => (
                            <SeriesDirective
                                key={directive.name}
                                xName='x'
                                yName='y'
                                opacity={0.5}
                                type='SplineArea'
                                width={2}
                                border={{ width: 2 }}
                                {...directive}
                            />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};
