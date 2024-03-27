import "./projectCard.css";
const ProjectCard = ({ projectNumber, feature, onOpenModal, image }) => {
  return (
    <div className="project-card" onClick={onOpenModal}>
      <div className="image">
        <img src={image} alt="project_picture" />
      </div>
      <h3>{feature}</h3>
      <h2>{projectNumber}</h2>
    </div>
  );
};
export default ProjectCard;
