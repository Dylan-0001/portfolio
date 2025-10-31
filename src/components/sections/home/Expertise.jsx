import { expertises } from "@/components/data/Data";
import { ExpertiseCard } from "@/components/ExpertiseCard";

export const Expertise = () => {

  return (
    <section className="expertise">
      <img className="expertise-line" src="/lines/expertise-line.png" alt="expertise line" />
      <div className="expertise__container">
        <h2 className="expertise__title">MES COMPÉTENCES</h2>

        <div className="expertise__grid">
          {expertises.map((item, i) => (
            <ExpertiseCard key={i} item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};
