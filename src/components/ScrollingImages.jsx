import React, { useState } from 'react';
// import Tooltip from './Tooltip';

const ScrollingImages = ({ images }) => {
  const [isMoving, setIsMoving] = useState(true);

  return (
    <div 
      className="overflow-hidden whitespace-nowrap"
      onMouseEnter={() => setIsMoving(false)}
      onMouseLeave={() => setIsMoving(true)}
    >
      <div className={'flex w-max animate-scroll'} style={{animationPlayState: isMoving ? 'running' : 'paused'}}>
        {images.concat(images).map((image, index) => (
            <img
              key={index}
              src={image.path}
              title={image.name}
              alt={`logo of ${image.name}`}
              className="w-auto h-24 md:h-48 object-cover mx-2 md:mx-4"
            />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;