import { Image } from "react-bootstrap";

function Skills({ logo, name, height = "50px" }) {

  return (

    <div className="skill-item">

      <Image
        src={logo}
        alt={name}
        fluid
        style={{ height }}
      />

      <p className="skill-name">
        {name}
      </p>

    </div>

  );
}

export default Skills;