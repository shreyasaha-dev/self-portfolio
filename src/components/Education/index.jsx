import EducationCard from "../EducationCard";
import data from "../../constant";
const Education = () => {
  return (
    <div className="total-education">
      {data?.education?.map((element, i) => {
        return (
          <EducationCard
            university={element?.institutionName}
            key={i}
            subject={element?.degree}
            date={element?.duration}
            details={element?.details}
          />
        );
      })}
    </div>
  );
};
export default Education;
