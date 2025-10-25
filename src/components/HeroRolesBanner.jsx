import { Triangle } from "lucide-react";
import { rolesBanner } from "./data/Data";


export const HeroRolesBanner = ({title,addClass}) => {

    const roles = rolesBanner;

    return(
        <div className="hero-roles">

            {roles.map((r, i) => (
                <> 
                    <span className="hero-roles__item">{r.role}</span>
                    <span className="hero-roles__dot">
                        <Triangle size={40}/>
                    </span>
                </>
            ))}

        </div>
    );

}