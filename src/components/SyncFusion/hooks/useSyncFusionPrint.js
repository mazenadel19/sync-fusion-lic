import { useRef } from 'react';

const useSyncFusionPrint = () => {
    const chartInstance = useRef(null);
    function printClickHandler() {
        chartInstance.current.print();
    }
    return { printClickHandler, chartInstance };
};

export default useSyncFusionPrint;
