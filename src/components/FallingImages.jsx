// could later update this so that rather than scaling up based on quipLevel, it scales up based on BPS
// could also change animation speed - for example increase speed if player's production is temporarily boosted

import React, { useState, useEffect } from "react";

const FallingImage = (props) => {
  const [fallingImages, setFallingImages] = useState([]);
  const animationDuration = 3000;

  useEffect(() => {
    // Determine the interval duration based on props.currentQuipLevel (acting as a proxy for player progress)
    let intervalDuration;
    switch (props.currentQuipLevel) {
      case 0:
        intervalDuration = 2000000000; // 555.5 hours (goofy solution to not have burg animation show before player starts playing)
        break;
      case 1:
        intervalDuration = 1000; // 1 seconds
        break;
      case 2:
        intervalDuration = 500; // 0.5 seconds
        break;
      case 3:
        intervalDuration = 250; // 0.25 seconds
        break;
      case 4:
        intervalDuration = 125;
        break;
      case 5:
        intervalDuration = 62.5;
        break;
      case 6:
        intervalDuration = 31.25;
        break;
      case 7:
        intervalDuration = 15;
        break;
      default:
        console.log(
          "useEffect to determine falling burger animation was passed an invalid quip level"
        );
        intervalDuration = 200;
    }

    // Initialize falling images at the determined interval
    const intervalId = setInterval(() => {
      const newImage = {
        id: Math.random() * 100000,
        top: 0,
        left: Math.random() * 100,
      };

      setFallingImages((prevImages) => [...prevImages, newImage]);

      // Set a timeout to remove the oldest image after its animation ends
      setTimeout(() => {
        setFallingImages((prevImages) => prevImages.slice(1));
      }, animationDuration);

      // Clear the interval when enough images have been added
      if (fallingImages.length >= 200) {
        clearInterval(intervalId);
      }
    }, intervalDuration);

    return () => {
      // Cleanup: Remove interval
      clearInterval(intervalId);
    };
  }, [fallingImages, props.currentQuipLevel]); // Re-run effect when fallingImages or props.currentQuipLevel changes

  return (
    <div className="falling--images--container">
      {fallingImages.map((image) => (
        <img
          key={image.id}
          id={`falling-image-${image.id}`}
          className="falling-image"
          src={props.img}
          alt="Falling Image"
          style={{
            top: `${image.top}%`,
            left: `${image.left}%`,
            animation: `fallAnimation ${animationDuration / 1000
              }s linear forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingImage;
