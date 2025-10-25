import { ExperienceCard } from "../../components/ExperienceCard";

export const Experience = () => {

    const experiences = [
    {
      id: 1,
      company: "Devia Studios",
      role: "Java Developer",
      period: "2021-2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur consectetur, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
    {
      id: 2,
      company: "Devia Studios",
      role: "Java Developer",
      period: "2021-2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur consectetur, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
    {
      id: 3,
      company: "Devia Studios",
      role: "Java Developer",
      period: "2021-2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur consectetur, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
    {
      id: 4,
      company: "Devia Studios",
      role: "Java Developer",
      period: "2021-2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur consectetur, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
  ];

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
