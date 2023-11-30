import {
    AnnotationDirective,
    Annotations,
    AnnotationsDirective,
    AxesDirective,
    AxisDirective,
    CircularGaugeComponent,
    Inject,
    PointerDirective,
    PointersDirective,
    RangeDirective,
    RangesDirective,
} from '@syncfusion/ej2-react-circulargauge';
import React from 'react';
import styles from './../../../../styles.module.css';

export const ArcGauge = ({ value, midRangeStart, midRangeEnd }) => {
    value = isNaN(parseFloat(value)) ? 0 : value;
    midRangeStart = isNaN(parseFloat(midRangeStart)) ? 40 : midRangeStart;
    midRangeEnd = isNaN(parseFloat(midRangeEnd)) ? 70 : midRangeEnd;
    const pointerColor =
        value > 0 && value < 40
            ? '#ed5e4b'
            : value >= 40 && value < 70
            ? '#ffe852'
            : '#a8f789';

    return (
        <div className={styles.control_pane}>
            <section className={styles.control_section}>
                <CircularGaugeComponent
                    background='transparent'
                    id={'ca21'}
                    width='280px'
                    height='350px'
                >
                    <Inject services={[Annotations]} />
                    <AxesDirective>
                        <AxisDirective
                            startAngle={220}
                            endAngle={140}
                            radius='80%'
                            minimum={0}
                            maximum={100}
                            lineStyle={{ width: 0 }}
                            majorTicks={{ height: 0, interval: 15 }}
                            minorTicks={{ height: 0 }}
                            labelStyle={{
                                position: 'Outside',
                                font: { size: '0px' },
                            }}
                        >
                            <PointersDirective>
                                <PointerDirective
                                    roundedCornerRadius={20}
                                    value={value}
                                    type='RangeBar'
                                    radius='90%'
                                    color={pointerColor}
                                    animation={{ enable: false }}
                                    border={{ color: 'grey', width: 0 }}
                                    pointerWidth={30}
                                />
                            </PointersDirective>
                            <RangesDirective>
                                <RangeDirective
                                    start={0}
                                    end={100}
                                    startWidth={30}
                                    endWidth={30}
                                    radius='90%'
                                    color='#E0E0E0'
                                    roundedCornerRadius={20}
                                />
                                <RangeDirective
                                    start={3}
                                    end={midRangeStart - 1}
                                    startWidth={10}
                                    endWidth={10}
                                    radius='105%'
                                    roundedCornerRadius={10}
                                    color='#ed5e4b'
                                />
                                <RangeDirective
                                    start={midRangeStart}
                                    end={midRangeEnd}
                                    startWidth={10}
                                    endWidth={10}
                                    radius='105%'
                                    roundedCornerRadius={10}
                                    color='#ffe852'
                                />
                                <RangeDirective
                                    start={midRangeEnd + 1}
                                    end={96}
                                    startWidth={10}
                                    endWidth={10}
                                    radius='105%'
                                    roundedCornerRadius={10}
                                    color='#a8f789'
                                />
                            </RangesDirective>
                            <AnnotationsDirective>
                                <AnnotationDirective
                                    content={`<div style="font-size:30px;font-family:inherit;">${value}%</div>`}
                                    angle={170}
                                    zIndex='1'
                                    radius='12%'
                                />
                            </AnnotationsDirective>
                        </AxisDirective>
                    </AxesDirective>
                </CircularGaugeComponent>
            </section>
        </div>
    );
};
