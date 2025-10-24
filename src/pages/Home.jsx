import { Hero } from "./home/Hero.jsx";
import { Project } from "./home/Project.jsx";
import AboutMe from "./home/AboutMe.jsx";
import Experience from "./home/Experience.jsx";
import Expertise from "./home/Expertise.jsx";
import FavouriteStack from "./home/FavouriteStack.jsx";
import Testimonials from "./home/Testimonials.jsx";

export const Home = () => {
    return (
        <main>
            <Hero />
            <Project />
            <AboutMe />
            <Experience />
            <Expertise />
            <FavouriteStack />
            <Testimonials />
        </main>
    )
}