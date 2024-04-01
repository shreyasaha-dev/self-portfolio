import { useState } from "react";
import Heading from "../Heading";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import "./project.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ProjectModal from "../ProjectModal";
import data from "../../constant";
const Projects = () => {
  const [projectData, setProjectData] = useState({});
  const [open, setOpen] = useState(false);
  const onOpenModal = (element) => {
    setProjectData(element);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);
  return (
    <div className="total-projects">
      <Title title="PORTFOLIO" />
      <Heading heading="Featured Projects" />
      <div className="all-projects">
        {data?.project?.map((element, i) => {
          return (
            <ProjectCard
              key={i}
              onOpenModal={() => {
                onOpenModal(element);
              }}
              image={element?.image}
              projectNumber={element?.projectName}
              feature={element?.techStack.join(",")}
            />
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        classNames={{
          modal: "color",
        }}
      >
        <ProjectModal
          projectName={projectData?.projectName}
          description={projectData?.description}
          website={projectData?.website}
          github={projectData?.gitHub}
          image={projectData?.image}
          techStack={projectData?.techStack}
        />
      </Modal>
    </div>
  );
};
export default Projects;
