import { useSelector } from "react-redux";
import Heading from "../Heading/index";
import SubHeading from "../SubHeading/index";
import Title from "../Title/index";
import "./introduction .css";
import data from "../../constant";
const Introduction = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-intro">
      <Title title="INTRODUCTION" />
      <Heading heading={data?.introduction?.role} />
      <SubHeading subHeading={data?.introduction?.details} />
      <span>{data?.landing?.fullName}</span>
    </div>
  );
};
export default Introduction;
