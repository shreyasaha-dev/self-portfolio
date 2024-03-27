import { useSelector } from "react-redux";
import ExperienceCard from "../ExperienceCard";
import moment from "moment";

const Experience = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-experience">
      {userData?.timeline
        ?.filter((item) => {
          if (item?.enabled && !item?.forEducation) {
            return item;
          }
        })
        ?.map((element) => {
          return (
            <ExperienceCard
              duration={`${moment(element?.startDate).format(
                "MMMM, YYYY"
              )} - ${moment(element?.endDate).format("MMMM, YYYY")}`}
              companyName={element?.company_name}
              position={element?.jobTitle}
              details={element?.bulletPoints}
              key={element?._id}
            />
          );
        })}
    </div>
  );
};
export default Experience;
