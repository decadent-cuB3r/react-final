import detailOne from "../images/first-detail/1-2-1.jpg";
import detailTwo from "../images/first-detail/1-2-2.jpg";
import detailThree from "../images/first-detail/1-2-3.jpg";
import detailFour from "../images/first-detail/1-2-4.jpg";
import detailFive from "../images/first-detail/1-2-5.jpg";
import detailSix from "../images/first-detail/1-2-6.jpg";

export default function TableDetailImg() {
  return (
    <div className="TableDetail">
      <img className="TableDetail-img" src={detailOne} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailTwo} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailThree} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailFour} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailFive} alt="404 NOT Found" />
      <img className="TableDetail-img" src={detailSix} alt="404 NOT Found" />
    </div>
  );
}
