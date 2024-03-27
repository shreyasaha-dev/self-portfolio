import { useSelector } from "react-redux";
import EducationCard from "../EducationCard";
import moment from "moment";
const Education = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-education">
      {userData?.timeline
        ?.filter((item) => {
          if (item?.enabled && item?.forEducation) {
            return item;
          }
        })
        ?.map((element) => {
          return (
            <EducationCard
              university={element?.company_name}
              key={element?._id}
              subject={element?.jobTitle}
              date={`${moment(element?.startDate).format("YYYY")} - ${moment(
                element?.endDate
              ).format("YYYY")}`}
              details={element?.summary}
            />
          );
        })}
    </div>
  );
};
export default Education;
