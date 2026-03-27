import ProjectTechstack from "./ProjectTechstack";
import "./project subcomp.css";

function ProjectDetails({ title, repo, techstack }) {
  return (
    <div className="project-details">

      <h1 className="project-details-title">{title}</h1>

      <a 
        href={repo} 
        className="project-details-link"
        target="_blank"
        rel="noopener noreferrer"
      >
      Project Link
      </a>

      <ProjectTechstack techstackArray={techstack} />

      

    </div>
  );
}

export default ProjectDetails;