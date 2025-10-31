"use client"

import {ProjectModal} from "@/components/ProjectModal";
import {useState} from "react";

export const Project = () => {

const projects = [
  {
      id: 1,
      title: "Phone App",
      image: "/images/project/project-1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
      tech: "ReactJs, Java",
      project_url: "https://github.com/Dylan-0001",
      project_github: "https://github.com/Dylan-0001",
  },
  {
      id: 2,
      title: "Devia Dashboard",
      image: "/images/project/project-2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
      tech: "ReactJs, NextJs",
      project_url: "https://github.com/Dylan-0001",
      project_github: "https://github.com/Dylan-0001",
  },
  {
      id: 3,
      title: "UI Concept",
      image: "/images/project/project-3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
      tech: "ReactJs, NextJs",
      project_url: "https://github.com/Dylan-0001",
      project_github: "https://github.com/Dylan-0001",
  },
  {
      id: 4,
      title: "MD Design",
      image: "/images/project/project-4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
      tech: "ReactJs, NextJs",
      project_url: "https://github.com/Dylan-0001",
      project_github: "https://github.com/Dylan-0001",
  },
  {
      id: 5,
      title: "Mockup Presentation",
      image: "/images/project/project-5.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem.",
      tech: "ReactJs, NextJs",
      project_url: "https://github.com/Dylan-0001",
      project_github: "https://github.com/Dylan-0001",
  },
];


const [selectedProject, setSelectedProject] = useState(null);
const [isOpen, setIsOpen] = useState(false);

function handleOpenModal(project) {
    setSelectedProject(project);
    setIsOpen(true);
}

function handleCloseModal() {
    setIsOpen(false);
    setSelectedProject(null);
}

return (
    <section id="projects" className="projects">
      
      <img className="project-line" src="/lines/project-line.png" alt="project line" />

      <div className="projects__container">
        <div className="left">
          <div className="block">
            <img src={projects[0].image} alt={projects[0].title} className="image" onClick={() => handleOpenModal(projects[0])} />
            <div className="block-right">
              <img src={projects[1].image} alt={projects[1].title} className="image" onClick={() => handleOpenModal(projects[1])}/>
              <div className="project-card">
                <h2 className="projects__title"> PROJETS </h2>
              </div>
            </div>
          </div>
          <img src={projects[3].image} alt={projects[3].title} className="image" onClick={() => handleOpenModal(projects[3])}/>
        </div>
        <div className="right">
          <img src={projects[2].image} alt={projects[2].title} className="image" onClick={() => handleOpenModal(projects[2])}/>
          <img src={projects[4].image} alt={projects[4].title} className="image" onClick={() => handleOpenModal(projects[4])}/>
        </div>
      </div>
      
      <button className="projects__button">See All Projects</button>
        {selectedProject && (
            <ProjectModal
                project={selectedProject}
                isOpen={isOpen}
                onClose={handleCloseModal}
            />
        )}
    </section>
  );
}