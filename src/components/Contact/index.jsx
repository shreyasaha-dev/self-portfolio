import ContactCard from "../ContactCard";
import Heading from "../Heading";
import SubHeading from "../SubHeading";
import Title from "../Title";
import "./contact.css";
import data from "../../constant";
const Contact = () => {
  return (
    <div className="total-contact">
      <Title title="CONTACT" />
      <Heading heading="Get In Touch" />
      <SubHeading subHeading={data?.introduction?.details} />
      <ContactCard />
      <p>ADDRESS</p>
      <h2>{data?.about?.address}</h2>
      <p>PHONE</p>
      <div>
        <a href={`tel:${data?.about?.phoneNumber}`}>
          {data?.about?.phoneNumber}
        </a>
      </div>
      <a href={`mailto:${data?.about?.email}`}>{data?.about?.email}</a>
    </div>
  );
};
export default Contact;
