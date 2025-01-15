import React, { useState, useEffect } from 'react';

const FullScreenGif = ({ src, onFinish, size='full', duration = 5000 }) => {
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
            className={' h-full object-cover' + 
                (size === 'full' ? 'w-full' : 
                 size === 'half' ? 'w-1/2'  : 'w-2/3')}
          />
        </div>
      )}
    </>
    );
}

export default FullScreenGif;