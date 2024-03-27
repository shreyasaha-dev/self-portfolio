import { useSelector } from "react-redux";
import SkillCard from "../SkillCard";
import "./skills.css";
const Skills = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-skill">
      {userData?.skills
        ?.filter((item) => {
          if (item?.enabled) {
            return item;
          }
        })
        ?.map((element) => {
          return (
            <SkillCard
              icon={element?.image?.url}
              name={element?.name}
              percentage={element?.percentage}
              key={element?._id}
            />
          );
        })}
    </div>
  );
};
export default Skills;
