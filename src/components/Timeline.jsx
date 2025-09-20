import { useRef, useEffect, useState } from 'react';

const Timeline = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const isPageBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

        const onWheel = (e) => {
            // If page is at bottom (or we've already activated the timeline), hijack vertical wheel
            if (isPageBottom() || active) {
                const atLeft = el.scrollLeft <= 0;
                const atRight = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;

                // If scrolling up and timeline is at left edge, allow normal page scroll back up
                if (e.deltaY < 0 && atLeft) {
                setIsVisible(false);
                return;
                }

                e.preventDefault(); // necessary to stop vertical page scroll
                el.scrollLeft += e.deltaY; // map vertical wheel to horizontal scroll
                setIsVisible(true);

                // If user reaches left edge while scrolling up, deactivate timeline mode
                if (el.scrollLeft <= 0 && e.deltaY < 0) setIsVisible(false);
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        return () => window.removeEventListener('wheel', onWheel);
    }, [isVisible]);
    
    
    
    return (
        <div
            className="w-screen h-128 my-6 px-10 mx-[-1.25rem] border-1 overflow-x-auto whitespace-nowrap"
            ref={sectionRef}
        >
            <div className="w-[200%]">
                test
            </div>
        </div>
    );
}

export default Timeline;