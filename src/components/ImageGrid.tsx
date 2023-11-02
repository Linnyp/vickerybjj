import { useState, useEffect } from "react";

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

      console.log(importedImages);

      setImages(importedImages);
    };

    importImages();
  }, []);

  return (
    <div className="img-container">
      {images.map((imagePath, index) => (
        <img key={index} src={imagePath} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
