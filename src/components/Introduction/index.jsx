import { useSelector } from "react-redux";
import Heading from "../Heading/index";
import SubHeading from "../SubHeading/index";
import Title from "../Title/index";
import "./introduction .css";
const Introduction = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-intro">
      <Title title="INTRODUCTION" />
      <Heading heading={userData?.about?.title} />
      <SubHeading subHeading={userData?.about?.subTitle} />
      <span>{userData?.about?.name}</span>
    </div>
  );
};
export default Introduction;
