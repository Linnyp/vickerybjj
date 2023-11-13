import { useState, useEffect } from "react";
import ToTopBtn from "./ToTopBtn.";

export default function ImageGrid() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const importImages = async () => {
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

    importImages();
  }, []);

  return (
    <div id="photos">
      {images.map((imagePath, index) => (
        <img key={index} src={imagePath} alt={`Image ${index}`} />
      ))}
      <ToTopBtn />
    </div>
  );
}
