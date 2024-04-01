import moment from "moment";
import "./footer.css";
import data from "../../constant";
const Footer = () => {
  return (
    <div className="footer-section">
      <h3>Copyright © {moment().format("YYYY")}. All rights reserved.</h3>
      <h3>
        Developed by <span> {data?.landing?.fullName}</span>
      </h3>
    </div>
  );
};
export default Footer;
