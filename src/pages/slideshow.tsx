import React, { useState, useEffect } from "react";

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const imageContext = require.context(
        "../images/gallery",
        false,
        /\.(jpg|jpeg)$/
      );

      const importedImages: string[] = imageContext
        .keys()
        .map((key) => imageContext(key));

      setImages(importedImages);
    };

    const initGallery = async () => {
      await fetchData();
    };

    initGallery();
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slide-container">
      <a className="prev" onClick={goToPrevSlide}>
        &#10094;
      </a>
      <img src={images[currentIndex]} alt={`slide ${currentIndex + 1}`} />
      <a className="next" onClick={goToNextSlide}>
        &#10095;
      </a>
      <div className="numbertext">{`${currentIndex + 1}/${
        images.length
      } `}</div>
    </div>
  );
}
