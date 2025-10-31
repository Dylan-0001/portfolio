import { FakeSearchBar } from "@/components/FakeSearchBar";
import { HeroBadge } from "@/components/HeroBadge";
import { HeroRolesBanner } from "@/components/HeroRolesBanner";

export const Hero = () => {

    return (
       <section id="home-hero" className="home-hero">
           <h1>Hey, moi c’est Dylan !</h1>
           <img className="hero-line" src="/lines/head-line.png" alt="head line" />

           <div className="hero-container">
                <FakeSearchBar/>

               <div className="bit-mojie">
                   <img src="/images/bitMojie.png" alt="bitMojie" />

                   <HeroBadge title="Developpeur Backend" addClass="--backend"/>
                   <HeroBadge title="Webflow" addClass="--web"/>
                   <HeroBadge title="Developpeur Frontend" addClass="--branding"/>

                   <div className="hero-badge hero-badge--available">
                        <span className="hero-badge__dot"></span>
                        Disponible
                   </div>
               </div>
           </div>

        <HeroRolesBanner/>
       </section>
    )
}