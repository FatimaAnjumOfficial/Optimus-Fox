import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://i.pinimg.com/originals/ce/b8/3f/ceb83f22108e7ec3ea224d4f735d292b.jpg",
    "https://i.pinimg.com/736x/c0/12/f9/c012f9159cd1e7bd3535f0ed38586de0.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2400);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      style={{
        width: "360px",
        height: "450px",
        overflow: "hidden",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease",
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
      }}
    >
      <img
        src={images[currentImageIndex]}
        alt="Slider"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  );
};

export default Slider;
