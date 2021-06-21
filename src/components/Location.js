import location from "../images/location.png";
import { Link } from "react-router-dom";
import NavItem from "../components/NavItem"

export default function Map() {
  return (
    <div className="location-layout">
      <div className="location-layout-triangle"></div>
      <div className="location-layout2">
        <div className="suggest-position">
          <div id="suggest-title" className="location-intro-title">
            <div className="title-color">推薦</div>周邊商品
          </div>
          <hr id="suggest-line" className="location-intro-line"></hr>
          <div className="suggest-product">
            <NavItem to="/product/mahjong">
              <div className="suggest-product-img">
                <img src="../images/otherproducts/duncan-mj.jpeg" alt="No-Warning"/>
                <div class="middle">
                  <div class="text">手打麻將</div>
                </div>
              </div>
            </NavItem>
            <NavItem to="/product/tableAccessory">
              <div className="suggest-product-img">
                <img src="../images/otherproducts/100p.jpeg" alt="No-Warning"/>
                <div class="middle">
                  <div class="text">麻將配件</div>
                </div>
              </div>
            </NavItem>
          </div>
        </div>
        <div className="location-position">
          <div className="location-intro">
            <div className="location-intro-title">
              <div className="title-color">聯絡</div>我們
            </div>
            <hr className="location-intro-line"></hr>
            <div className="location-intro-text">
              <img className="location-img" src={location} alt="Map" />
              <div class="intro-information">
                105台北市南港區八德路四段911號1樓
                <br />
                電話 : 02-26518977 / 0965-165-269
                <br />
                免付費服務專線:0800-019-68
              </div>
            </div>
            <Link to="/">
              <div className="location-btn">與我聯繫</div>
            </Link>
          </div>
          <div className="map-block">
            <iframe
              className="location-map"
              title="Map to Store"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7228.993747326298!2d121.58125900000002!3d25.051143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab9d989f7841%3A0x1bf23e87b5d32417!2zMTE15Y-w5YyX5biC5Y2X5riv5Y2A5YWr5b636Lev5Zub5q61OTEx6Jmf!5e0!3m2!1szh-TW!2stw!4v1618384820973!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div id="right" className="location-layout-triangle"></div>
    </div>
  );
}
