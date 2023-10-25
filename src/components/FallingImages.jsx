import React, { useState, useEffect, useRef } from "react";

const FallingImage = (props) => {
  const [fallingImages, setFallingImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const addFallingImage = () => {
      const id = Date.now();
      setFallingImages((prevImages) => [
        ...prevImages,
        { id, top: 0, left: Math.random() * 100 },
      ]);

      // Create a ref for the new image
      const newImageRef = React.createRef();
      imageRefs.current.push({ id, ref: newImageRef });

      // Remove the image from state after the animation ends
      const removeImage = () => {
        setFallingImages((prevImages) =>
          prevImages.filter((image) => image.id !== id)
        );
      };

      // Attach the animationend event listener to the new image using the ref
      if (newImageRef.current) {
        newImageRef.current.addEventListener("animationend", removeImage, {
          once: true,
        });
      }
    };

    const intervalId = setInterval(addFallingImage, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      {fallingImages.map((image) => (
        <img
          key={image.id}
          ref={
            imageRefs.current.find((item) => item.id === image.id)?.ref || null
          }
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
