import './App.css';
import { ProgressBar, ResourceAllocation, StackedBar100 } from './components/SyncFusion/';
import { stackedBarDataSource } from './components/fakeData/fakeSyncFusionStackedBar100';

import {
  columnsDirective,
  dataSource,
  resources,
} from './components/fakeData/fakeSyncFusionResourceAllocation';


function App() {
  return (
    <div className="App">
      <StackedBar100
        dataSource={stackedBarDataSource}
        tooltipRender={(args) => {
          args.text = `${args.point.y} custom tooltip`;
        }}
      />
      <br /><br />
      <ProgressBar value={15} />
      <br /><br />
      <br /><br />
      <ResourceAllocation
        dataSource={dataSource}
        resources={resources}
        columnsDirective={columnsDirective}
      />
    </div>
  );
}

export default App;
