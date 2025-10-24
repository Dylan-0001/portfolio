
import expertiseLine from "/src/assets/lines/expertise-line.png";

const Expertise = () => {
  const expertiseItems = [
    {
      id: 1,
      title: "User Interface",
      percentage: 75,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 2,
      title: "App Design",
      percentage: 90,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 3,
      title: "Branding",
      percentage: 65,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 4,
      title: "Figma",
      percentage: 85,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 5,
      title: "HTML",
      percentage: 95,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur.",
    },
    {
      id: 6,
      title: "CSS",
      percentage: 90,
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
            <div key={item.id} className="expertise__card">
              <div className="expertise__card-header">
                <h3 className="expertise__card-title">{item.title}</h3>
                <span className="expertise__percentage">{item.percentage}%</span>
              </div>
              <p className="expertise__description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
