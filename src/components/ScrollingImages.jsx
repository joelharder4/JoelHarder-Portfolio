import React, { useState } from 'react';
import { motion } from "motion/react"

const ScrollingImages = ({ images }) => {
  const [isMoving, setIsMoving] = useState(true);

  return (
    <div 
      className="overflow-x-hidden whitespace-nowrap py-4"
      onMouseEnter={() => setIsMoving(false)}
      onMouseLeave={() => setIsMoving(true)}
    >
      <div className={'flex w-max animate-[scroll_30s_linear_infinite]'} style={{animationPlayState: isMoving ? 'running' : 'paused'}}>
        {images.concat(images).map((image, index) => (
            <motion.img
              key={index}
              src={image.path}
              title={image.name}
              alt={`logo of ${image.name}`}
              whileHover={{ scale: 1.1 }}
              className="w-auto h-24 md:h-40 object-cover mx-2 md:mx-4"
            />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImages;