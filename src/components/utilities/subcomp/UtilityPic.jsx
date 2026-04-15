import "./utility subcomp.css";

function UtilityPic({ pic }) {
  return (
    <div className="utility-pic-wrapper">
      <img
        src={pic}
        alt="Utility Picture"
        className="utility-pic-img"
      />
    </div>
  );
}

export default UtilityPic;