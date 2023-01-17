import React, { useState, useEffect } from 'react';
import './ImageGrid.css';

function ImageGrid({ images }) {
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const imgLoadPromises = images.map(url => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve({ url, width: img.width, height: img.height });
      });
    });

    Promise.all(imgLoadPromises).then(dimensions => {
      setImageDimensions(dimensions);
    });
  }, [images]);

  return (
    <div className="image-grid-container" style={{overflowX: 'scroll'}}>
      <div className="image-grid">
        {imageDimensions.map(({ url, width, height }) => (
          <img key={url} src={url} style={{ width, height }} />
        ))}
      </div>
    </div>
  );
}



export default ImageGrid;
