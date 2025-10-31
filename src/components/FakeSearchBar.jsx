import { SearchIcon } from "lucide-react";
import { socialLinks } from "@/components/data/Data";


export const FakeSearchBar = () => {

    return(
        <div className="fake-nav-bar">
            <div className="fake-search-bar">
                <SearchIcon size={20}/>
                <p>Developpeur Frontend</p>
            </div>

            {socialLinks.map((r, i) => (
                <a href={r.href} key={i}>
                    <div key={i} className="rs-item">
                        <img src={r.icon} alt={r.title} className={r.title.toLowerCase() === "github" ? "github" : ""}/>
                        <p>{r.title}</p>
                    </div>
                </a>
            ))}
        </div>
    );

}