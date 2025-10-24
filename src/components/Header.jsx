
export const Header = () => {

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
                <ul>
                    {headerLink.map((item,index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}