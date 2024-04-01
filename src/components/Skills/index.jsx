import { useSelector } from "react-redux";
import SkillCard from "../SkillCard";
import "./skills.css";
import data from "../../constant";
const Skills = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-skill">
      {data?.skill?.map((element, i) => {
        return (
          <SkillCard
            icon={element?.image}
            name={element?.name}
            percentage={element?.percent}
            key={i}
          />
        );
      })}
    </div>
  );
};
export default Skills;
