//import projectLine from "/src/assets/lines/project-line.png";
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
      <h2 className="projects__title">PROJECTS</h2>
      <img className="project-line" src={projectLine} alt="project line" />

      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-card__image"
            />
            <div className="project-card__overlay">
              <h3 className="project-card__title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <button className="projects__button">See All Projects</button>
    </section>
  );
}