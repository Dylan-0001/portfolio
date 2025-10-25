import { SearchIcon } from "lucide-react";

export const HeroBadge = ({title,addClass}) => {

    return(
        <>
            <div className={`hero-badge hero-badge${addClass}`}>
                <SearchIcon size={20}/>
                {title}
            </div>
        </>
    );

}