
import gitIcon from '/src/assets/icons/git-icon.png';

export const Footer = () => {

    const webLinks = [
        { text: 'Home',    },
        { text: 'Project', },
        { text: 'About',   },
        { text: 'Contact', }
    ];

    const socialLinks = [
        { text: 'LinkedIn',  },
        { text: 'Facebook',  },
        { text: 'Instagram', },
        { text: 'GitHub',    }
    ];

    return (
        <footer>
            <div className="container">
                <div className="informations">
                    <h2>Dylan Portfolio</h2>
                    <p>“ Life is not about waiting for the storms to pass.”</p>
                    <div className="github-button">
                        <img src={gitIcon} alt="GitHub icon" />
                        <p className="github-name">My Github Page</p>
                    </div>
                </div>
                <div className="socials">
                    <div className="links">
                        {webLinks.map((link, index) => (
                            <p key={"weblink-" + index}>{link.text}</p>
                        ))}
                    </div>
                    <div className="links">
                        {socialLinks.map((link, index) => (
                            <p key={"sociallink-" + index}>{link.text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}