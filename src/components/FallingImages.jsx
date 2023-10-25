import React, { useState, useEffect } from "react";

const FallingImage = (props) => {
  const [fallingImages, setFallingImages] = useState([]);

  useEffect(() => {
    const addFallingImage = () => {
      setFallingImages((prevImages) => [
        ...prevImages,
        { id: Date.now(), top: 0, left: Math.random() * 100 },
      ]);
    };

    const intervalId = setInterval(addFallingImage, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      {fallingImages.map((image) => (
        <img
          key={image.id}
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
