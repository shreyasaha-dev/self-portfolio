import Heading from "../Heading";
import TestimonialCard from "../TestimonialCard";
import "./testimonials.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
const Testimonials = () => {
  const userData = useSelector((state) => state.userData);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="total-testimonial">
      <Heading heading="Testimonials" />
      <Slider {...settings}>
        {userData?.testimonials
          ?.filter((item) => {
            if (item?.enabled) {
              return item;
            }
          })
          ?.map((element) => {
            return (
              <TestimonialCard
                image={element?.image?.url}
                review={element?.review}
                name={element?.name}
                key={element?._id}
                position={element?.position}
              />
            );
          })}
      </Slider>
    </div>
  );
};
export default Testimonials;
