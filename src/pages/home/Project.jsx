import project1 from "/src/assets/images/project/project-1.png";
import project2 from "/src/assets/images/project/project-2.png";
import project3 from "/src/assets/images/project/project-3.png";
import project4 from "/src/assets/images/project/project-4.png";
import project5 from "/src/assets/images/project/project-5.png";

import projectLine from "/src/assets/lines/project-line.png";

export const Project = () => {

const projects = [
  { id: 1, title: "Phone App", image: project1 },
  { id: 2, title: "Devia Dashboard", image: project2 },
  { id: 3, title: "UI Concept", image: project3 },
  { id: 4, title: "MD Design", image: project4 },
  { id: 5, title: "Mockup Presentation", image: project5 },
];

 return (
    <section className="projects">
    <img className="project-line" src={projectLine} alt="project line" />

    <div className="projects__container">
      <div className="left">
        <div className="block">
          <img src={projects[0].image} alt={projects[0].title} className="image"/>
          <div className="block-right">
            <img src={projects[1].image} alt={projects[1].title} className="image"/>
            <div className="project-card">
              <h2 className="projects__title">PROJECTS</h2>
            </div>
          </div>
        </div>
        <img src={projects[3].image} alt={projects[3].title} className="image"/>
      </div>
      <div className="right">
        <img src={projects[2].image} alt={projects[2].title} className="image"/>
        <img src={projects[4].image} alt={projects[4].title} className="image"/>

      </div>
    </div>
      <button className="projects__button">See All Projects</button>
    </section>
  );
}