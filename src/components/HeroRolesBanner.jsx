import { Triangle } from "lucide-react";


export const HeroRolesBanner = ({title,addClass}) => {

    const roles = [
        { role: "Backend Developer"},
        { role: "Software Engineer"},
        { role: "Frontend Developer"},
    ]

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