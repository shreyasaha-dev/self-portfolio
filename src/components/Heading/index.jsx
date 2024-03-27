import "./heading.css";
const Heading = ({ heading }) => {
  return (
    <div className="heading">
      <h1>{heading}</h1>
      <div></div>
    </div>
  );
};
export default Heading;
