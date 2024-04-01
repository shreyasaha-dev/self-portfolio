import Title from "../Title/index";
import Heading from "../Heading/index";
import SubHeading from "../SubHeading/index";
import "./about.css";
import { useSelector } from "react-redux";
import data from "../../constant";
const About = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-about">
      <Title title="ABOUT ME" />
      <Heading heading="Biography" />
      <SubHeading subHeading={data?.about?.description} />
      <div className="about-details-section">
        <div className="details">
          <h3>NAME</h3>
          <h4>{data?.landing?.fullName}</h4>
        </div>
        <div className="details">
          <h3>PHONE</h3>
          <a href={`tel:${data?.about?.phoneNumber}`} className="border">
            {data?.about?.phoneNumber}
          </a>
        </div>
        <div className="details">
          <h3>EMAIL</h3>
          <a href={`mailto:${data?.about?.email}`} className="border">
            {data?.about?.email}
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
