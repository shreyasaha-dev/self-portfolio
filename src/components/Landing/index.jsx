import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./landing.css";
import data from "../../constant";
const Landing = () => {
  return (
    <div className="total-landing">
      <div className="landing-left-section">
        <h2>HI THERE ! I AM</h2>
        <h1>{data?.landing?.fullName}</h1>
        <div className="all-icons">
          <a
            href={data?.landing?.gitHub}
            className="icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href={data?.landing?.linkedIn}
            className="icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="landing-right-section">
        <img src={data?.landing?.avatar} alt="profile_picture" />
      </div>
    </div>
  );
};
export default Landing;
