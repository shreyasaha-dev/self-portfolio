import "./testimonialCard.css";
const TestimonialCard = ({ image, review, name, position }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt="person_image" />
      <div className="right-section">
        <p>{review}</p>
        <h3>{name}</h3>
        <h4>{position}</h4>
      </div>
    </div>
  );
};
export default TestimonialCard;
