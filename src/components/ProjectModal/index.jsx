import "./projectModal.css";
const ProjectModal = ({
  projectName,
  description,
  website,
  github,
  image,
  techStack,
}) => {
  return (
    <div className="project-modal">
      <h1>{projectName}</h1>
      <img src={image} alt="project_image" />
      <h4>{description}</h4>
      <ul>
        {techStack.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <div className="url-section">
        <a href={website} target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};
export default ProjectModal;
