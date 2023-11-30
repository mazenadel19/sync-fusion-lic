// The task fields object maps the expected field names by Timeline Component to the name in my data source.
// https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/
export const taskFields = {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    progress: 'progress',
    child: 'child',
    work: 'work',
    resourceInfo: 'resourceInfo',
    type: 'type',
};

// The resource fields object, maps the expected field names by Timeline Component to the name in my resources.
// https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields/
export const resourceFields = {
    id: 'id',
    name: 'name',
};

export const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
};

export const toolbar = [
    'Add',
    'Edit',
    'Update',
    'Delete',
    'Cancel',
    'ExpandAll',
    'CollapseAll',
];
