
import { socialLinks } from './data/Data';

export const Footer = () => {

    const webLinks = [
        { text: 'Home', href: 'home-hero' },
        { text: 'Project', href: 'projects' },
        { text: 'About', href: 'about-me' },
        { text: 'Contact', href: 'contact' }
    ];

    return (
        <footer>
            <div className="container">
                <div className="informations">
                    <h2>Portfolio</h2>
                    <p>“ Life is not about waiting for the storms to pass.”</p>
                    <a href="https://github.com/Dylan-0001">
                        <div className="github-button">
                            <img src="/icons/git-icon.png" alt="GitHub icon" />
                            <p className="github-name">Mon Github</p>
                        </div>
                    </a>
                </div>
                <div className="socials">
                    <div className="links">
                        {webLinks.map((link, index) => (
                            <a href={"#" + link.href} key={index}>
                                <p key={"weblink-" + index}>{link.text}</p>
                            </a>
                        ))}
                    </div>
                    <div className="links">
                        {socialLinks.map((link, index) => (
                            <a href={link.href} key={index}>
                                <p key={"sociallink-" + index}>{link.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}