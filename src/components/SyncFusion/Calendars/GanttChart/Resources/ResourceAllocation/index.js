import {
    ColumnDirective,
    ColumnsDirective,
    DayMarkers,
    Edit,
    GanttComponent,
    Inject,
    Selection,
    Toolbar,
} from '@syncfusion/ej2-react-gantt';
import React from 'react';
import { loadLocale, loadCulture } from '../../../../helper';
import {
    editSettings,
    resourceFields,
    taskFields,
    toolbar,
} from './index.constants';

/**
 * @param {{
 *   dataSource: {
 *     id: number;
 *     name: string;
 *     startDate: Date;
 *     endDate: Date;
 *     child: {
 *         id: number;
 *         name: string;
 *         startDate: Date;
 *         duration: number;
 *         progress?: number;
 *         work: number;
 *         resourceInfo: ({ id: number; unit: number } | number)[];
 *     }[];
 *   }[];
 *   resources: { field: string; visible?: boolean; headerText?: string; width?: string }[];
 *   columnsDirective?: { field: string; visible?: boolean; headerText?: string; width?: string }[];
 * }} options - An object containing the following properties.
 *   - {Array} dataSource - The data source array that will be displayed in the Component.
 *   - {Array} resources - Resources used by dataSource's resourceInfo to match id to names.
 *   - {Array} [columnsDirective] - Optional. The columns directive array that will be used in the table. If not provided, all columns from the dataSource will be used.
 * @return {JSX.Element} - The JSX element representing the function's output.
 */
export const ResourceAllocation = ({
    dataSource = [],
    resources = [],
    columnsDirective = [],
}) => {
    const lang = 'en'
    const isDirectionRTL = false
    loadLocale(lang);

    loadCulture(lang);

    return (
        <div className={'control_pane'}>
            <div className={'control_section'}>
                <GanttComponent
                    id={'resourceAllocation_00'}
                    data-testId='ganttComponent'
                    locale={lang}
                    enableRtl={isDirectionRTL}
                    dataSource={dataSource}
                    treeColumnIndex={1}
                    allowSelection={true}
                    toolbar={toolbar}
                    editSettings={editSettings}
                    resourceFields={resourceFields}
                    taskFields={taskFields}
                    resources={resources}
                    labelSettings={{ rightLabel: 'resourceInfo' }}
                    splitterSettings={{ columnIndex: 3.5 }}
                    workUnit='Hour'
                    height='410px'
                >
                    <ColumnsDirective>
                        {columnsDirective.map((column) => (
                            <ColumnDirective key={column.field} {...column} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Selection, DayMarkers, Toolbar, Edit]} />
                </GanttComponent>
            </div>
        </div>
    );
};
