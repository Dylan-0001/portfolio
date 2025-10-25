
import stackLine from "/src/assets/lines/stack-line.png";
import { StackCard } from "../../components/StackCard";
import { technologies } from "../../components/data/Data";

export const FavouriteStack = () => {

  return (
    <section className="favourite-stack">
      <img className="stack-line" src={stackLine} alt="stack line" />
      <div className="favourite-stack__container">
        <h2 className="favourite-stack__title">FAVOURITE STACK</h2>

        <div className="favourite-stack__grid">
          {technologies.map((tech) => (
            <StackCard item={tech}/>
          ))}
        </div>
      </div>
    </section>
  );
};
