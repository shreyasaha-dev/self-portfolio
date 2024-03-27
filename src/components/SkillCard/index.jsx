import "./skillCard.css";
const SkillCard = ({ icon, name, percentage }) => {
  return (
    <div className="each-skill">
      <img src={icon} alt="icons" />
      <div className="skill-details">
        <p>{name}</p>
        <h3>{percentage}%</h3>
      </div>
    </div>
  );
};
export default SkillCard;
