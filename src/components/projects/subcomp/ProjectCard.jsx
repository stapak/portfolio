import "./project subcomp.css";

import ProjectPic from "./ProjectPic";
import ProjectDetails from "./ProjectDetails";
import ProjectDiscription from "./ProjectDiscription";

function ProjectCard({ projectData }) {
  return (
    <div className="project-card-container">

      <ProjectPic pic={projectData.image} />

      <ProjectDetails
        title={projectData.title}
        techstack={projectData.techstack}
        repo={projectData.repolink}
        demo={projectData.demo ? projectData.demo : null}
       
      />

      <ProjectDiscription
        description={projectData.description}
      />

    </div>
  );
}

export default ProjectCard;