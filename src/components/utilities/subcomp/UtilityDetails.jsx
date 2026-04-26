import UtilityTechstack from "./UtilityTechstack";
import "./utility subcomp.css";

function UtilityDetails({ title, repo, techstack, demo }) {
  return (
    <div className="utility-details">

      <h1 className="utility-details-title">{title}</h1>

      <div className="utility-links">
      <a 
        href={repo} 
        className="utility-link"
        target="_blank"
        rel="noopener noreferrer"
      >
      Utility Link
      </a>

      { demo &&
       <a 
        href={demo} 
        className="utility-demo-link"
        target="_blank"
        rel="noopener noreferrer"
        >
          Live Utility
        </a>
      }

      </div>

      <UtilityTechstack techstackArray={techstack} />

      

    </div>
  );
}

export default UtilityDetails;