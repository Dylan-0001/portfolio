import { StackCard } from "@/components/StackCard";
import { technologies } from "@/components/data/Data";

export const FavouriteStack = () => {

  return (
    <section className="favourite-stack">
      <img className="stack-line" src="/lines/stack-line.png" alt="stack line" />
      <div className="favourite-stack__container">
        <h2 className="favourite-stack__title">FAVOURITE STACK</h2>

        <div className="favourite-stack__grid">
          {technologies.map((tech, i) => (
            <StackCard key={i} item={tech}/>
          ))}
        </div>
      </div>

    </section>
  );
};
