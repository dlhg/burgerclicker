import React, { useState, useEffect } from "react";

const FallingImage = (props) => {
  const [fallingImages, setFallingImages] = useState([]);

  useEffect(() => {
    // Initialize falling images at 1-second intervals
    const intervalId = setInterval(() => {
      const newImage = {
        id: fallingImages.length,
        top: 0,
        left: Math.random() * 100,
      };

      setFallingImages((prevImages) => [...prevImages, newImage]);

      // Set a timeout to remove the oldest image after its animation ends
      setTimeout(() => {
        setFallingImages((prevImages) => prevImages.slice(1));
      }, 3000); // Assuming the animation duration is 3 seconds

      // Clear the interval when enough images have been added
      if (fallingImages.length >= 20) {
        clearInterval(intervalId);
      }
    }, 1000);

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
            animation: "fallAnimation 3s linear forwards",
          }}
        />
      ))}
    </div>
  );
};

export default FallingImage;
