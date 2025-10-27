import { SearchIcon } from "lucide-react";
import { socialLinks } from "./data/Data";


export const FakeSearchBar = () => {

    return(
        <div className="fake-nav-bar">
            <div className="fake-search-bar">
                <SearchIcon size={20}/>
                <p>Backend Developer</p>
            </div>

            {socialLinks.map((r, i) => (
                <div key={i} className="rs-item">
                    <img src={r.icon} alt={r.title} className={r.title.toLowerCase() === "github" ? "github" : ""}/>
                    <p>{r.title}</p>
                </div>
            ))}
        </div>
    );

}