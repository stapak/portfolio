import Skills from "./Skills";

function SkillList({ title, skillsArray }) {

  return (

    <div className="skill-column">

      <h1 className="skill-title">
        {title}
      </h1>

      <div className="skill-list">

        {skillsArray.map((skill) => (
          <Skills
            key={skill.name}
            logo={skill.logo}
            name={skill.name}
          />
        ))}

      </div>

    </div>

  );
}

export default SkillList;