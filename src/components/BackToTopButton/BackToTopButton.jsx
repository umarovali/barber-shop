import React, { useState, useEffect } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Handler for the scroll event to toggle button visibility
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up and clean up the event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to smoothly scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button className="back_to_top" onClick={scrollToTop}>
                    <ExpandLessIcon />
                </button>
            )}
        </div>
    );
}
