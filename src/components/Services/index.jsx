import { useSelector } from "react-redux";
import Heading from "../Heading";
import ServiceCard from "../ServiceCard";
import SubHeading from "../SubHeading";
import Title from "../Title";
import "./services.css";
const Services = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-service">
      <Title title="SERVICES" />
      <Heading heading="What I Do" />
      <SubHeading subHeading={userData?.about?.subTitle} />
      <div className="all-services">
        {userData?.services
          ?.filter((item) => {
            if (item?.enabled) {
              return item;
            }
          })
          ?.map((element) => {
            return (
              <ServiceCard
                name={element?.name}
                description={element?.desc}
                payment={element?.charge}
                key={element?._id}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Services;
