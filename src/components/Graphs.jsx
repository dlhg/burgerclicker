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
    display: "grid",
    placeItems: "center",
    width: "100%",
    height: "100%",
  },
  chart: {
    width: "100%",
    maxWidth: "600px",
    height: "20rem",
    margin: "1.5rem",
    boxSizing: "border-box",
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    marginTop: "2rem",
  },
  button: {
    width: "25%",
    padding: "10px",
    margin: "5px",
    boxSizing: "border-box",
    fontSize: "1.2rem",
  },
  activeButton: {
    backgroundColor: "green",
    color: "white",
  },
};

const BurgerGraph = ({ burgerCount, totalBuildingBPS }) => {
  const [burgerDataPoints, setBurgerDataPoints] = useState([]);
  const [bpsDataPoints, setBpsDataPoints] = useState([]);
  const [xAxisMode, setXAxisMode] = useState("all");
  const [isAnimationOn, setIsAnimationOn] = useState(true);
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

  const createChartData = () => {
    const displayedBurgerDataPoints = getDisplayedDataPoints(burgerDataPoints);
    const displayedBpsDataPoints = getDisplayedDataPoints(bpsDataPoints);

    return {
      labels: displayedBurgerDataPoints.map((_, index) => index + 1),
      datasets: [
        {
          label: "Burgers Held",
          data: displayedBurgerDataPoints,
          fill: false,
          backgroundColor: "green",
          borderColor: "green",
          yAxisID: "y1",
        },
        {
          label: "Burgers Per Second",
          data: displayedBpsDataPoints,
          fill: false,
          backgroundColor: "grey",
          borderColor: "grey",
          yAxisID: "y2",
        },
      ],
    };
  };

  const options = {
    animation: isAnimationOn
      ? {
          duration: 500,
          easing: "easeOutQuad",
        }
      : false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
        title: {
          display: true,
          text: "Burgers Held", // Label for the left Y axis
          color: "#666",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Burgers Per Second", // Label for the right Y axis
          color: "#666",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  const getButtonStyle = (mode) => {
    return xAxisMode === mode
      ? { ...styles.button, ...styles.activeButton }
      : styles.button;
  };

  return (
    <>
      <div style={styles.graphContainer}>
        <div style={styles.chart}>
          <Line data={createChartData()} options={options} />
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <button
          style={getButtonStyle("all")}
          onClick={() => setXAxisMode("all")}
        >
          Show All
          <br />
          (slower performance)
        </button>
        <button
          style={getButtonStyle("last300")}
          onClick={() => setXAxisMode("last300")}
        >
          Show Last 5 minutes
        </button>
        <button
          style={getButtonStyle("last60")}
          onClick={() => setXAxisMode("last60")}
        >
          Show Last 60 Seconds
        </button>
        <button
          style={styles.button}
          onClick={() => setIsAnimationOn(!isAnimationOn)}
        >
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
