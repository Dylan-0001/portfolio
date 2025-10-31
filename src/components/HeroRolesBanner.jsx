// npm install react-fast-marquee

import Marquee from "react-fast-marquee";
import { rolesBanner } from "./data/Data";

export const HeroRolesBanner = () => {
    const roles = rolesBanner;

    return (
        <div className="hero-roles">
            <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={false}
            >
                {roles.map((r, i) => (
                    <div key={i} className="hero-roles__item-group">
                        <span className="hero-roles__item">{r.role}</span>
                        <span className="hero-roles__dot" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};