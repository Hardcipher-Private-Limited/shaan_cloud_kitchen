import React, { useState } from "react";
import { Image } from "react-image";

const MapWithMarker = ({ imageSrc, imageWidth, imageHeight, coordinates }) => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    const [x, y] = coordinates;
    const pixelX = (x / 360) * naturalWidth;
    const pixelY = ((y + 90) / 180) * naturalHeight;
    setMarkerPosition({ x: pixelX, y: pixelY });
  };

  return (
    <div style={{ position: "relative" }}>
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        onLoad={handleImageLoad}
      />
      {markerPosition && (
        <div
          style={{
            position: "absolute",
            left: markerPosition.x,
            top: markerPosition.y,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        ></div>
      )}
    </div>
  );
};

export default MapWithMarker;
