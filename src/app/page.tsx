
import {Hero} from "@/components/sections/home/Hero";
import {AboutMe} from "@/components/sections/home/AboutMe";
import {Project} from "@/components/sections/home/Project";
import {Experience} from "@/components/sections/home/Experience";
import {Expertise} from "@/components/sections/home/Expertise";
import {FavouriteStack} from "@/components/sections/home/FavouriteStack";
import {Testimonials} from "@/components/sections/home/Testimonials";


export default function Home() {
  return (
      <main>
        <Hero />
        <AboutMe />
        <Project />
        <Experience />
        <Expertise />
        <FavouriteStack />
        <Testimonials />
      </main>
  );
}
