import React, { useState, useEffect } from 'react';

const FullScreenGif = ({ src, onFinish, duration = 5000 }) => {
  const [showGif, setShowGif] = useState(false);

    useEffect(() => {
        if (src) {
            setShowGif(true);
        }
    }, [src]);

    useEffect(() => {
        if (showGif) {
            setTimeout(() => {
                setShowGif(false);
                onFinish?.();
            }, duration);
        }
    }, [showGif, onFinish, duration]);

    return (
    <>
      {showGif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-none">
          <img
            src={src}
            alt="Gif covering the entire screen"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
    );
}

export default FullScreenGif;