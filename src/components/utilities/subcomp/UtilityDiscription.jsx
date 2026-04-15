import "./utility subcomp.css";

function UtilityDiscription({ description }) {
  return (
    <div className="utility-description">
      <ul className="utility-description-list">
        {description.map((point, index) => (
          <li key={index} className="utility-description-item">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UtilityDiscription;