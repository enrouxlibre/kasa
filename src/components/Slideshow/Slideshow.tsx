import React, { useState } from "react";
import "./Slideshow.scss";

export default function Slideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {images.length > 1 && (
        <>
          <button
            className="slideshow__button slideshow__button--prev"
            onClick={goToPrevious}
          >
            &#10094;
          </button>
          <button
            className="slideshow__button slideshow__button--next"
            onClick={goToNext}
          >
            &#10095;
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
