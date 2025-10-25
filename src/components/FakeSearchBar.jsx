import { SearchIcon } from "lucide-react";

import linkedinIcon from "/src/assets/icons/linkedin-icon.png"
import facebookIcon from "/src/assets/icons/facebook-icon.png"
import instagramIcon from "/src/assets/icons/instagram-icon.png"
import githubIcon from "/src/assets/icons/git-icon.png"

export const FakeSearchBar = () => {

    const list = [
        { icon: linkedinIcon, title: "Linkedin",   },
        { icon: facebookIcon, title: "Facebook",   },
        { icon: instagramIcon, title: "Instagram", },
        { icon: githubIcon, title: "Github",       },
    ];

    return(
        <div className="fake-nav-bar">
            <div className="fake-search-bar">
                <SearchIcon size={20}/>
                <p>Backend Developer</p>
            </div>

            {list.map((r, i) => (
                <div key={i} className="rs-item">
                    <img src={r.icon} alt={r.title} className={r.title.toLowerCase() === "github" ? "github" : ""}/>
                    <p>{r.title}</p>
                </div>
            ))}
        </div>
    );

}