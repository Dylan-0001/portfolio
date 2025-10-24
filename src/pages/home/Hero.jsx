import headLine from "/src/assets/lines/head-line.png";
import bitMojie from "/src/assets/images/bit-mojie.png";
import {ArrowBigDown, FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, SearchIcon, Triangle} from "lucide-react";

import linkedinIcon from "/src/assets/icons/linkedin-icon.png"
import facebookIcon from "/src/assets/icons/facebook-icon.png"
import instagramIcon from "/src/assets/icons/instagram-icon.png"
import githubIcon from "/src/assets/icons/git-icon.png"


export const Hero = () => {

    const rs = [
        { icon: linkedinIcon, title: "Linkedin",   },
        { icon: facebookIcon, title: "Facebook",   },
        { icon: instagramIcon, title: "Instagram", },
        { icon: githubIcon, title: "Github",       },
    ];

    return (
       <section className="home-hero">
           <h1>Hi, Im Dylan</h1>
           <img className="hero-line" src={headLine} alt="head line" />

           <div className="hero-container">
               <div className="fake-nav-bar">
                   <div className="fake-search-bar">
                       <SearchIcon size={20}/>
                       <p>Backend Developer</p>
                   </div>

                   {rs.map((r, i) => (
                       <div key={i} className="rs-item">
                           <img src={r.icon} alt={r.title} className={r.title.toLowerCase() === "github" ? "github" : ""}/>
                           <p>{r.title}</p>
                       </div>
                   ))}
               </div>

               <div className="bit-mojie">
                   <img src={bitMojie} alt="bitMojie" />

                   {/* Floating badges */}
                   <div className="hero-badge hero-badge--backend">
                        <SearchIcon size={20}/>
                        Backend Developer
                    </div>
                   <div className="hero-badge hero-badge--web">
                        <SearchIcon size={20}/>
                        Web Designer
                    </div>
                   <div className="hero-badge hero-badge--available">
                        <span className="hero-badge__dot"></span>
                        Available
                   </div>
                   <div className="hero-badge hero-badge--branding">
                        <SearchIcon size={20}/>
                        Branding
                    </div>
               </div>
           </div>

           <div className="hero-roles">
               <span className="hero-roles__item">Backend Developer</span>
                <span className="hero-roles__dot">
                    <Triangle size={40}/>
               </span>
               <span className="hero-roles__item">Software Engineer</span>
                <span className="hero-roles__dot">
                    <Triangle size={40}/>
               </span>
               <span className="hero-roles__item">Frontend Developer</span>
           </div>
       </section>
    )
}