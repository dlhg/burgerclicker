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

const styles = {
  graphContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  chart: {
    flex: "1 1 45%",
    maxWidth: "500px",
    padding: "10px",
    boxSizing: "border-box",
  },
};

const BurgerGraph = ({ burgerCount, totalBuildingBPS }) => {
  const [burgerDataPoints, setBurgerDataPoints] = useState([]);
  const [bpsDataPoints, setBpsDataPoints] = useState([]);
  const [xAxisMode, setXAxisMode] = useState("all");
  const [isAnimationOn, setIsAnimationOn] = useState(true); // New state for animation toggle
  const burgerCountRef = useRef(burgerCount);
  const totalBuildingBPSRef = useRef(totalBuildingBPS);

  useEffect(() => {
    burgerCountRef.current = burgerCount;
    totalBuildingBPSRef.current = totalBuildingBPS;
  }, [burgerCount, totalBuildingBPS]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBurgerDataPoints((current) => [...current, burgerCountRef.current]);
      setBpsDataPoints((current) => [...current, totalBuildingBPSRef.current]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getDisplayedDataPoints = (dataPoints) => {
    if (xAxisMode === "last300") {
      return dataPoints.slice(-300);
    } else if (xAxisMode === "last60") {
      return dataPoints.slice(-60);
    }
    return dataPoints;
  };

  const createChartData = (dataPoints, label, color) => ({
    labels: dataPoints.map((_, index) => index + 1),
    datasets: [
      {
        label: label,
        data: dataPoints,
        fill: false,
        backgroundColor: color,
        borderColor: color,
      },
    ],
  });

  const options = {
    animation: isAnimationOn
      ? {
          duration: 500,
          easing: "easeOutQuad",
        }
      : false, // Disable animation if isAnimationOn is false
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  const burgerChartData = createChartData(
    getDisplayedDataPoints(burgerDataPoints),
    "Burgers Held",
    "green"
  );

  const bpsChartData = createChartData(
    getDisplayedDataPoints(bpsDataPoints),
    "Burgers Per Second",
    "blue"
  );

  return (
    <>
      <div style={styles.graphContainer}>
        <div style={styles.chart}>
          <Line data={burgerChartData} options={options} />
        </div>
        <div style={styles.chart}>
          <Line data={bpsChartData} options={options} />
        </div>
      </div>
      <div>
        <button onClick={() => setXAxisMode("all")}>Show All</button>
        <button onClick={() => setXAxisMode("last300")}>
          Show Last 300 Seconds
        </button>
        <button onClick={() => setXAxisMode("last60")}>
          Show Last 60 Seconds
        </button>
        <button onClick={() => setIsAnimationOn(!isAnimationOn)}>
          Toggle Animation {isAnimationOn ? "Off" : "On"}
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
