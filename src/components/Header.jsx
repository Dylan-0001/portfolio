import { useState, useEffect } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const headerLink = [
        { text: 'Home' },
        { text: 'Project' },
        { text: 'About' },
        { text: 'Contact' }
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
    }, [isOpen]);

    return (
        <header>
            <nav>
                <div className="logo">
                    <p>Portfolio</p>
                </div>
                
                <div 
                    className={`burger ${isOpen ? "open" : ""}`} 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    {headerLink.map((item, index) => (
                        <li key={index} onClick={handleLinkClick}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};