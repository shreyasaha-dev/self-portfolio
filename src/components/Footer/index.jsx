import moment from "moment";
import "./footer.css";
import { useSelector } from "react-redux";
const Footer = () => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="footer-section">
      <h3>Copyright © {moment().format("YYYY")}. All rights reserved.</h3>
      <h3>
        Developed by <span> {userData?.about?.name}</span>
      </h3>
    </div>
  );
};
export default Footer;
