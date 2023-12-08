/*
graph component:
    - BPS over time
    - total burgers produced over time
    - current burgers held
    - allow for linear and log scale view (earnings curve should be exponential when active and linear when idle/offline)


- create app level state variable called "snapshot" or something similar
    - run an interval to gather whatever data i want to graph every defined interval (30s?)
    - this snapshot function could probably eventually help with creating save files
*/
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const BurgerGraph = ({ burgerCount }) => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(currentDataPoints => [...currentDataPoints, burgerCount]);
    }, 1000);

    return () => clearInterval(interval);
  }, [burgerCount]);

  const data = {
    labels: dataPoints.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Burger Count',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)', // Green color
        borderColor: 'rgba(75, 192, 192, 0.2)', // Green color with transparency
      },
    ],
  };

  return <Line data={data} />;
};

export default BurgerGraph;
