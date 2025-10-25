import headLine from "/src/assets/lines/head-line.png";
import bitMojie from "/src/assets/images/bit-mojie.png";

import { FakeSearchBar } from "../../components/FakeSearchBar";
import { HeroBadge } from "../../components/HeroBadge";
import { HeroRolesBanner } from "../../components/HeroRolesBanner";

export const Hero = () => {

    return (
       <section className="home-hero">
           <h1>Hi, Im Dylan</h1>
           <img className="hero-line" src={headLine} alt="head line" />

           <div className="hero-container">
                <FakeSearchBar/>

               <div className="bit-mojie">
                   <img src={bitMojie} alt="bitMojie" />

                   <HeroBadge title="Backend Developer" addClass="--backend"/>
                   <HeroBadge title="Web Designer" addClass="--web"/>
                   <HeroBadge title="Branding" addClass="--branding"/>

                   <div className="hero-badge hero-badge--available">
                        <span className="hero-badge__dot"></span>
                        Available
                   </div>
               </div>
           </div>

        <HeroRolesBanner/>
       </section>
    )
}