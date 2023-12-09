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
import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const BurgerGraph = ({ burgerCount }) => {
  const [dataPoints, setDataPoints] = useState([]);
  const [xAxisMode, setXAxisMode] = useState("all"); // State to track the X-axis mode
  const burgerCountRef = useRef(burgerCount);

  useEffect(() => {
    // Update the ref to the latest value without triggering re-render
    burgerCountRef.current = burgerCount;
  }, [burgerCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Use the current value of the ref
      setDataPoints((currentDataPoints) => [
        ...currentDataPoints,
        burgerCountRef.current,
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array to ensure this effect runs only once

  // Determine which data points to display based on the selected mode
  let displayedDataPoints;
  if (xAxisMode === "last300") {
    displayedDataPoints = dataPoints.slice(-300);
  } else if (xAxisMode === "last60") {
    displayedDataPoints = dataPoints.slice(-60);
  } else {
    displayedDataPoints = dataPoints;
  }

  const data = {
    labels: displayedDataPoints.map((_, index) => index + 1),
    datasets: [
      {
        label: "Burger Count",
        data: displayedDataPoints,
        fill: false,
        backgroundColor: "green",
        borderColor: "green",
      },
    ],
  };

  const options = {
    animation: {
      duration: 500,
      easing: "easeOutQuad",
      onComplete: () => console.log("Animation completed!"),
      delay: 0,
      loop: false,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    // Other chart options can go here
  };

  return (
    <>
      <Line data={data} options={options} />
      <div>
        <button onClick={() => setXAxisMode("all")}>Show All</button>
        <button onClick={() => setXAxisMode("last300")}>
          Show Last 300 Seconds
        </button>
        <button onClick={() => setXAxisMode("last60")}>
          Show Last 60 Seconds
        </button>
      </div>
    </>
  );
};

export default BurgerGraph;

// Available options are:

// 'linear'
// 'easeInQuad'
// 'easeOutQuad'
// 'easeInOutQuad'
// 'easeInCubic'
// 'easeOutCubic'
// 'easeInOutCubic'
// 'easeInQuart'
// 'easeOutQuart'
// 'easeInOutQuart'
// 'easeInQuint'
// 'easeOutQuint'
// 'easeInOutQuint'
// 'easeInSine'
// 'easeOutSine'
// 'easeInOutSine'
// 'easeInExpo'
// 'easeOutExpo'
// 'easeInOutExpo'
// 'easeInCirc'
// 'easeOutCirc'
// 'easeInOutCirc'
// 'easeInElastic'
// 'easeOutElastic'
// 'easeInOutElastic'
// 'easeInBack'
// 'easeOutBack'
// 'easeInOutBack'
// 'easeInBounce'
// 'easeOutBounce'
// 'easeInOutBounce'
