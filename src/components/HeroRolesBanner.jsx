import { rolesBanner } from "./data/Data";


export const HeroRolesBanner = ({title,addClass}) => {

    const roles = rolesBanner;

    // @ts-ignore
    return(
        <div className="hero-roles">

            {roles.map((r, i) => (
                <div key={i}>
                    <span className="hero-roles__item">{r.role}</span>
                    <span className="hero-roles__dot"></span>
                </div>
            ))}

        </div>
    );

}