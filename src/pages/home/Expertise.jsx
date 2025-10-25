
import { expertises } from "../../components/data/Data";
import { ExpertiseCard } from "../../components/ExpertiseCard";
import expertiseLine from "/src/assets/lines/expertise-line.png";

export const Expertise = () => {

  return (
    <section className="expertise">
      <img className="expertise-line" src={expertiseLine} alt="expertise line" />
      <div className="expertise__container">
        <h2 className="expertise__title">MY EXPERTISE</h2>

        <div className="expertise__grid">
          {expertises.map((item) => (
            <ExpertiseCard item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};
