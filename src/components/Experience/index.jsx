import ExperienceCard from "../ExperienceCard";
import moment from "moment";
import data from "../../constant";
const Experience = () => {
  return (
    <div className="total-experience">
      {data?.experience?.map((element, i) => {
        return (
          <ExperienceCard
            duration={element?.duration}
            companyName={element?.company}
            position={element?.role}
            details={element?.details}
            key={i}
          />
        );
      })}
    </div>
  );
};
export default Experience;
