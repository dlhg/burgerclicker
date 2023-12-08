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
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const BurgerGraph = ({ burgerCount }) => {
  const [dataPoints, setDataPoints] = useState([]);
  const burgerCountRef = useRef(burgerCount);

  useEffect(() => {
    // Update the ref to the latest value without triggering re-render
    burgerCountRef.current = burgerCount;
  }, [burgerCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Use the current value of the ref
      setDataPoints(currentDataPoints => [...currentDataPoints, burgerCountRef.current]);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to ensure this effect runs only once

  const data = {
    labels: dataPoints.map((_, index) => index + 1),
    datasets: [
      {
        label: 'Burger Count',
        data: dataPoints,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default BurgerGraph;
