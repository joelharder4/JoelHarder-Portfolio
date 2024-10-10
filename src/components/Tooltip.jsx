import React, { useRef, useState, useEffect } from 'react';

// Credit to Krishnaprasad R
// https://medium.com/@rkprasad.info/how-to-creating-a-cursor-anchored-tooltip-in-react-js-83593c5d17d2
const TooltipCursor = ({ children, content, delay }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltipContent, setShowTooltipContent] = useState(false);
  
  const tooltipRef = useRef(document.createElement('div'));

  const handleMouseMove = (event) => {
        const { clientX, clientY } = event;

        const tooltipWidth = tooltipRef.current?.offsetWidth || 0;
        const tooltipHeight = tooltipRef.current?.offsetHeight || 0;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        //+12 is added to give a spice between cursor and tooltip
        let tooltipX = clientX + 12;
        let tooltipY = clientY + 12;

        // Check if tooltip exceeds the right side of the viewport
        if (tooltipX + tooltipWidth > viewportWidth) {
            tooltipX = clientX - tooltipWidth - 10;
        }

        // Check if tooltip exceeds the bottom of the viewport
        if (tooltipY + tooltipHeight > viewportHeight) {
            tooltipY = viewportHeight - tooltipHeight - 10;
        }

        setTooltipPosition({ x: tooltipX, y: tooltipY });
    };

    const handleMouseEnter = () => {
        console.log('mouse enter');
        setTooltipVisible(true);
        setShowTooltipContent(false);
    };

    const handleMouseLeave = () => {
        console.log('mouse leave');
        setTooltipVisible(false);
    };


    useEffect(() => {
        let timeoutId;

        if (isTooltipVisible) {
            timeoutId = setTimeout(() => {
                console.log('show tooltip content');
                setShowTooltipContent(true);
            }, delay);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [isTooltipVisible, delay]);

  return (
    <div
      className="min-w-min"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isTooltipVisible && (
        <div
          ref={tooltipRef}
          className={`fixed p-3.5 bg-black text-white rounded-lg shadow text-sm font-semibold max-w-md ${showTooltipContent ? 'opacity-100' : 'opacity-0'}`}
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            zIndex: '200'
          }}
        >
          {content} hi aww
        </div>
      )}
      {children}
    </div>
  );
};



export default TooltipCursor;
