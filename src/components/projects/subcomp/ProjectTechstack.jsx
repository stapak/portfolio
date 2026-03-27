import "./project subcomp.css";

function ProjectTechstack({ techstackArray }) {
  return (
    <div className="project-techstack">

      <h6 className="project-techstack-title">TechStack</h6>

      <div className="project-techstack-list">
        {techstackArray.map((tech, index) => (
          <div key={index} className="project-tech-item">
            <img
              src={tech.logo}
              alt={tech.name}
              className="project-techstack-img"
            />

            {tech.name && (
              <span className="project-tech-name">{tech.name}</span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProjectTechstack;