import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import "./landing.css";
import { useSelector } from "react-redux";
const Landing = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="total-landing">
      <div className="landing-left-section">
        <h2>HI THERE ! I AM</h2>
        <h1>{userData?.about?.name}</h1>
        <div className="all-icons">
          {userData?.social_handles
            ?.filter((element) => {
              if (element.enabled) {
                return element;
              }
            })
            ?.map((item) => {
              return (
                <img
                  src={item?.image?.url}
                  alt="social_media"
                  key={item?._id}
                  className="icons"
                />
              );
            })}
        </div>
      </div>
      <div className="landing-right-section">
        <img src={userData?.about?.avatar?.url} alt="profile_picture" />
      </div>
    </div>
  );
};
export default Landing;
