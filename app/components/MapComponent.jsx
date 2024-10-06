import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import worldMap from '../../public/maps/world.json'; // Update the path

const MapComponent = () => {
  const [mapData, setMapData] = useState([]);

  const data = [
    { name: 'China', value: 100 },
    { name: 'India', value: 75 },
  ];

  useEffect(() => {
    echarts.registerMap('world', worldMap);
    setMapData(data);
  }, []);

  const getOption = () => ({
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'World Map',
        type: 'map',
        map: 'world',
        data: mapData,
      },
    ],
  });

  return <ReactECharts option={getOption()} style={{ height: '400px', width: '100%' }} />;
};

export default MapComponent;
