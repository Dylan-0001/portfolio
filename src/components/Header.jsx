import { useState } from "react";

export const Header = () => 
{    
    const [isOpen, setIsOpen] = useState(false);
    const headerLink = [
        { text: 'Home',    },
        { text: 'Project', },
        { text: 'About',   },
        { text: 'Contact', }
    ]

    return (
        <header>
            <nav>
                <div className="logo">
                    <p>Portfolio</p>
                </div>

                <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    {headerLink.map((item, index) => (
                        <li key={index} onClick={() => setIsOpen(false)}>
                        {item.text}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}