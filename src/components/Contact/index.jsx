import { useSelector } from "react-redux";
import ContactCard from "../ContactCard";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Title from "../Title";
import "./contact.css";
const Contact = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-contact">
      <Title title="CONTACT" />
      <Heading heading="Get In Touch" />
      <SubHeading subHeading={userData?.about?.subTitle} />
      <ContactCard />
      <p>ADDRESS</p>
      <h2>{userData?.about?.address}</h2>
      <p>PHONE</p>
      <div>
        <a href={`tel:${userData?.about?.phoneNumber}`}>
          {userData?.about?.phoneNumber}
        </a>
      </div>
      <a href={`mailto:${userData?.email}`}>{userData?.email}</a>
    </div>
  );
};
export default Contact;
