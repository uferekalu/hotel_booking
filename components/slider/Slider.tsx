import Image from "next/image";
import React, { useState } from "react";

interface ISlider {}
const images = [
  "/images/slide1.png",
  "/images/slide1.png",
  "/images/slide1.png",
  "/images/slide1.png",
];

const Slider: React.FC<ISlider> = ({}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-4"
        onClick={previousImage}
      >
        Previous
      </button>
      <Image
        className="w-full h-64 object-cover"
        src={images[currentImageIndex]}
        width={300}
        height={256}
        alt="Slider"
      />
      <button
        className="ml-4"
        onClick={nextImage}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
