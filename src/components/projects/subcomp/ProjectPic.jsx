import "./project subcomp.css";

function ProjectPic({ pic }) {
  return (
    <div className="project-pic-wrapper">
      <img
        src={pic}
        alt="Project Picture"
        className="project-pic-img"
      />
    </div>
  );
}

export default ProjectPic;