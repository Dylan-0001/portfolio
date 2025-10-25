import { experiences } from "../../components/data/Data";
import { ExperienceCard } from "../../components/ExperienceCard";

export const Experience = () => {

  return (
    <section className="experience">
      <div className="experience__container">
        <div className="experience__header">
          <h2 className="experience__title">EXPERIENCE</h2>
          <button className="experience__btn">See All Work</button>
        </div>

        <div className="experience__grid">
          {experiences.map((exp) => (
            <ExperienceCard list={exp}/>
          ))}
        </div>
      </div>
    </section>
  );
};
