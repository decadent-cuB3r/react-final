import Banner1 from "../images/carousel/banner1.jpg";
import Banner2 from "../images/carousel/banner2.png";
import Banner3 from "../images/carousel/banner3.png";
import { Carousel } from "antd";

export default function slide() {
  return (
    <div className="carousel">
      <div className="carousel-self-size">
        <Carousel autoplay className="carousel-self">
          <div>
            <img className="carousel-img" src={Banner1} alt="Banner" />
          </div>
          <div>
            <img className="carousel-img" src={Banner2} alt="Banner" />
          </div>
          <div>
            <img className="carousel-img" src={Banner3} alt="Banner" />
          </div>
        </Carousel>
      </div>
      <div className="carousel-block-yellow"></div>
    </div>
  );
}
