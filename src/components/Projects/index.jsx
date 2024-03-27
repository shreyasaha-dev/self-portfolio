import { useState } from "react";
import Heading from "../Heading";
import ProjectCard from "../ProjectCard";
import Title from "../Title";
import "./project.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ProjectModal from "../ProjectModal";
import { useSelector } from "react-redux";
const Projects = () => {
  const userData = useSelector((state) => state.userData);
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
        {userData?.projects
          ?.filter((item) => {
            if (item?.enabled) {
              return item;
            }
          })
          ?.map((element) => {
            return (
              <ProjectCard
                key={element?._id}
                onOpenModal={() => {
                  onOpenModal(element);
                }}
                image={element?.image?.url}
                projectNumber={element?.title}
                feature={element?.techStack.join(",")}
              />
            );
          })
          ?.reverse()}
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
          projectName={projectData?.title}
          description={projectData?.description}
          website={projectData?.liveurl}
          github={projectData?.githuburl}
          image={projectData?.image?.url}
          techStack={projectData?.techStack}
        />
      </Modal>
    </div>
  );
};
export default Projects;
