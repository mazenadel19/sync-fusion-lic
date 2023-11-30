import { Browser } from '@syncfusion/ej2-base';
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationTooltip,
    Inject,
    PieSeries,
} from '@syncfusion/ej2-react-charts';
import React from 'react';
import useSyncFusionPrint from '../../../../hooks/useSyncFusionPrint';
import styles from '../../../../styles.module.css';
export const Doughnut = ({
    centerLabel = {},
    dataSource = {},
    showPrint,
    onPointClick,
}) => {
    const { printClickHandler, chartInstance } = useSyncFusionPrint();

    return (
        <div className={`${styles.control_pane} ${styles.doughnut}`}>
            <div className={styles.control_actions}>
                {showPrint && (
                    <button
                        onClick={printClickHandler}
                    >
                        print
                    </button>
                )}
            </div>
            <div role='figure' className={styles.control_section}>
                <AccumulationChartComponent
                    id={'achart24'}
                    ref={chartInstance}
                    legendSettings={{ visible: false }}
                    enableSmartLabels={true}
                    height='100%'
                    width='100%'
                    pointClick={onPointClick}
                    centerLabel={{
                        textStyle: {
                            fontWeight: '600',
                            size: Browser.isDevice ? '7px' : '15px',
                        },
                        ...centerLabel,
                    }}
                    enableBorderOnMouseMove={false}
                    tooltip={{ enable: true }}
                    center={{ x: '50%', y: '50%' }}
                >
                    <Inject services={[PieSeries, AccumulationTooltip]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            tooltipMappingName='x'
                            dataSource={dataSource}
                            xName='x'
                            yName='y'
                            innerRadius='65%'
                            border={{ width: 1 }}
                            startAngle={Browser.isDevice ? 30 : 62}
                            dataLabel={{
                                visible: true,
                                position: 'Outside',
                                name: 'text',
                                font: { fontWeight: '600' },
                                connectorStyle: {
                                    length: '20px',
                                    type: 'Curve',
                                },
                            }}
                            radius={Browser.isDevice ? '40%' : '70%'}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    );
};
