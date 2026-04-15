import "./utility subcomp.css";

function UtilityTechstack({ techstackArray }) {
  return (
    <div className="utility-techstack">

      <h6 className="utility-techstack-title">TechStack</h6>

      <div className="utility-techstack-list">
        {techstackArray.map((tech, index) => (
          <div key={index} className="utility-tech-item">
            <img
              src={tech.logo}
              alt={tech.name}
              className="utility-techstack-img"
            />

            {tech.name && (
              <span className="utility-tech-name">{tech.name}</span>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default UtilityTechstack;