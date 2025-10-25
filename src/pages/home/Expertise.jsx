
import { ExpertiseCard } from "../../components/ExpertiseCard";
import expertiseLine from "/src/assets/lines/expertise-line.png";

export const Expertise = () => {
  const expertiseItems = [
    {
      id: 1,
      title: "Java",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 2,
      title: "Next.Js",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 3,
      title: "React",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 4,
      title: "Css / Scss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 5,
      title: "Webflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 6,
      title: "Gestion de Projet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
  ];

  return (
    <section className="expertise">
      <img className="expertise-line" src={expertiseLine} alt="expertise line" />
      <div className="expertise__container">
        <h2 className="expertise__title">MY EXPERTISE</h2>

        <div className="expertise__grid">
          {expertiseItems.map((item) => (
            <ExpertiseCard item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};
