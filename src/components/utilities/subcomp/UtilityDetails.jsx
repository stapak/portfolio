import UtilityTechstack from "./UtilityTechstack";
import "./utility subcomp.css";

function UtilityDetails({ title, repo, techstack }) {
  return (
    <div className="utility-details">

      <h1 className="utility-details-title">{title}</h1>

      <a 
        href={repo} 
        className="utility-link"
        target="_blank"
        rel="noopener noreferrer"
      >
      Utility Link
      </a>

      <UtilityTechstack techstackArray={techstack} />

      

    </div>
  );
}

export default UtilityDetails;