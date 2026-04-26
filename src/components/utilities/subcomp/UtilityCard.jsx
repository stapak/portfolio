import "./utility subcomp.css";

import UtilityPic from "./UtilityPic";
import UtilityDetails from "./UtilityDetails";
import UtilityDiscription from "./UtilityDiscription";

function UtilityCard({ utilityData }) {
  return (
    <div className="utility-card-container">

      <UtilityPic pic={utilityData.image} />

      <UtilityDetails
        title={utilityData.title}
        techstack={utilityData.techstack}
        repo={utilityData.repolink}
        demo={utilityData.demo ? projectData.demo : null}
  
      />

      <UtilityDiscription
        description={utilityData.description}
      />

    </div>
  );
}

export default UtilityCard;