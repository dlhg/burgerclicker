// should update this so that the amount of burgers can be scaled up as BPS scales up (maybe use quipLevel as a proxy for player progress as it updates less often - less re-renders)
// maybe animation speed can also be sped up if player gets some kind of temp production boost (gold burger?)

import React, { useState, useEffect } from "react";

const FallingImage = (props) => {
  const [fallingImages, setFallingImages] = useState([]);
  const animationDuration = 3000;
  useEffect(() => {
    // Initialize falling images at 1-second intervals
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
    }, 200);

    return () => {
      // Cleanup: Remove interval
      clearInterval(intervalId);
    };
  }, [fallingImages]); // Re-run effect when fallingImages changes

  return (
    <div className="container">
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
            animation: `fallAnimation ${
              animationDuration / 1000
            }s linear forwards`,
          }}
        />
      ))}
    </div>
  );
};

export default FallingImage;
