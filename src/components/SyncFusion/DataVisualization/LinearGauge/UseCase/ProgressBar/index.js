import {
    AnnotationDirective,
    Annotations,
    AnnotationsDirective,
    AxesDirective,
    AxisDirective,
    Inject,
    LinearGaugeComponent,
    PointerDirective,
    PointersDirective,
} from '@syncfusion/ej2-react-lineargauge';
import React from 'react';
import {
    LIGHT_YELLOW,
    TEAL_GREEN,
    TOMATO_RED,
} from '../../../../colors.constants';
import styles from './../../../../styles.module.css';

export const ProgressBar = ({ value }) => {
    const color =
        value > 90 ? TEAL_GREEN : value > 70 ? LIGHT_YELLOW : TOMATO_RED;

    return (
        <div className={styles.control_pane}>
            <div className={styles.control_section}>
                <LinearGaugeComponent
                    background='transparent'
                    id={'progressBar_asdxq1'}
                    orientation='Horizontal'
                    height='100px'
                    container={{
                        width: 30,
                        roundedCornerRadius: 20,
                        backgroundColor: '#D6D6D6',
                        type: 'RoundedRectangle',
                        border: { width: 1 },
                    }}
                >
                    <Inject services={[Annotations]} />
                    <AxesDirective>
                        <AxisDirective
                            minimum={0}
                            maximum={100}
                            line={{ width: 0 }}
                            minorTicks={{ interval: 1, height: 0 }}
                            majorTicks={{ interval: 10, height: 0 }}
                            labelStyle={{ font: { size: '0px' } }}
                        >
                            <PointersDirective>
                                <PointerDirective
                                    value={value}
                                    height={30}
                                    width={30}
                                    color={color}
                                    type='Bar'
                                    roundedCornerRadius={20}
                                />
                            </PointersDirective>
                        </AxisDirective>
                    </AxesDirective>
                    <AnnotationsDirective>
                        <AnnotationDirective
                            axisIndex={0}
                            axisValue={10}
                            x={0}
                            zIndex='1'
                            y={0}
                        />
                    </AnnotationsDirective>
                </LinearGaugeComponent>
            </div>
        </div>
    );
};
