import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const useScrollHandling = () => {
    const [scrollDriction, setScrollDrection] = useState(null);
    const previousScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDrection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDrection('up');
        }

        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;

        setScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDriction,
        scrollPosition
    };
};

export default useScrollHandling;
