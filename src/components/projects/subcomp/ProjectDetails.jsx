import ProjectTechstack from "./ProjectTechstack";
import "./project subcomp.css";

function ProjectDetails({ title, repo, techstack, demo }) {
  return (
    <div className="project-details">

      <h1 className="project-details-title">{title}</h1>

      <div className="project-links">
      <a 
        href={repo} 
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
      Project Link
      </a>
      { demo &&
       <a 
        href={demo} 
        className="project-demo-link"
        target="_blank"
        rel="noopener noreferrer"
        >
          Project demo
        </a>
      }

      </div>

      <ProjectTechstack techstackArray={techstack} />

      

    </div>
  );
}

export default ProjectDetails;