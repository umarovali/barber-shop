import React, { useState, useEffect } from 'react';

export default function MasterLink({ activeMaster, handleButtonClick, text, equals, num }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 860);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 861);
            setIsMobile(window.innerWidth > 401);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const buttonText = isMobile
        ? (activeMaster === equals ? num + ": " + text : num + ":")
        : text;

    return (
        <li>
            <button
                className={`${activeMaster === equals ? 'master_link_red' : 'master_link_white'}`}
                onClick={() => handleButtonClick(equals)}
            >
                {buttonText}
            </button>
        </li>
    );
}
