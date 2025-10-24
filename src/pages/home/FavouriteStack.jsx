
import stackLine from "/src/assets/lines/stack-line.png";

import gitIcon from "/src/assets/icons/git-icon-1.png";
import javaIcon from "/src/assets/icons/java-icon.png";
import webflowIcon from "/src/assets/icons/webflow-icon.png";
import figmaIcon from "/src/assets/icons/figma-icon.png";
import jsIcon from "/src/assets/icons/js-icon.png";
import postmanIcon from "/src/assets/icons/postman-icon.png";
import reactIcon from "/src/assets/icons/React-icon.png";
import scssIcon from "/src/assets/icons/scss-icon.png";

const FavouriteStack = () => {


  const technologies = [
    { id: 1, name: "Java", icon: javaIcon,},
    { id: 2, name: "React", icon: reactIcon,},
    { id: 3, name: "JavaScript", icon: jsIcon,},
    { id: 4, name: "Scss", icon: scssIcon,},
    { id: 5, name: "Webflow", icon: webflowIcon,},
    { id: 6, name: "Figma", icon: figmaIcon,},
    { id: 7, name: "PostMan", icon: postmanIcon,},
    { id: 8, name: "Git", icon: gitIcon,},

  ];

  return (
    <section className="favourite-stack">
      <img className="stack-line" src={stackLine} alt="stack line" />
      <div className="favourite-stack__container">
        <h2 className="favourite-stack__title">FAVOURITE STACK</h2>

        <div className="favourite-stack__grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="favourite-stack__card">
              <div className="favourite-stack__icon">
                <img src={tech.icon} alt={tech.name}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavouriteStack;
