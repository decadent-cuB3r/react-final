import { Carousel } from "antd";
import detailOne from "../images/first-detail/1-2-1.jpg";
import detailTwo from "../images/first-detail/1-2-2.jpg";
import detailThree from "../images/first-detail/1-2-3.jpg";
import detailFour from "../images/first-detail/1-2-4.jpg";
import detailFive from "../images/first-detail/1-2-5.jpg";
import detailSix from "../images/first-detail/1-2-6.jpg";
import detailSeven from "../images/first-detail/1-2-7.jpg";
import detailEight from "../images/first-detail/1-2-8.jpg";
import detailNine from "../images/first-detail/1-2-9.jpg";

export default function TableDetailImg() {
  return (
    <Carousel autoplay>
      <img className="TableDetail-img" src={detailOne} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailTwo} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailThree} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailFour} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailFive} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailSix} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailSeven} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailEight} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailNine} alt="404 NOT Found" />
    </Carousel>

  );
}
