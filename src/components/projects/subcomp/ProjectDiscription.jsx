import "./project subcomp.css";

function ProjectDiscription({ description }) {
  return (
    <div className="project-description">
      <ul className="project-description-list">
        {description.map((point, index) => (
          <li key={index} className="project-description-item">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDiscription;