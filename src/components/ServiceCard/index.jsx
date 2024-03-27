import "./serviceCard.css";
const ServiceCard = ({ name, description, payment }) => {
  return (
    <div className="service-card">
      <div className="service-left-section">
        <h1>{name}</h1>
        <h3>{description}</h3>
      </div>
      <div className="service-right-section">
        <h4>Starts from</h4>
        <h2>{payment}</h2>
      </div>
    </div>
  );
};
export default ServiceCard;
