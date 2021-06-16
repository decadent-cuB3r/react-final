import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import arrow from "../images/right-arrow.png";
import Slider from "react-slick";
import React, { Component } from "react";
import desk1 from "../images/tables/first-chicken.png";
import desk2 from "../images/tables/two-chicken.png";
import desk3 from "../images/tables/three-chicken.png";
import desk4 from "../images/tables/four-chicken.png";
import desk5 from "../images/tables/five-chicken.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="process-layout">
        <div className="process-intro">
          <div className="process-title">機種介紹</div>
          <hr className="process-line"></hr>
          <div className="slick">
            <Slider {...settings}>
              <div>
                <Link to="/product">
                  <img className="intro-img" src={desk1}></img>
                </Link>
              </div>
              <div>
                <Link to="/product">
                  <img className="intro-img" src={desk2}></img>
                </Link>
              </div>
              <div>
                <Link to="/product">
                  <img className="intro-img" src={desk3}></img>
                </Link>
              </div>
              <div>
                <Link to="/product">
                  <img className="intro-img" src={desk4}></img>
                </Link>
              </div>
              <div>
                <Link to="/product">
                  <img className="intro-img" src={desk5}></img>
                </Link>
              </div>
            </Slider>
          </div>
        </div>
        <div className="process-order">
          <div className="process-arrow-between"></div>
          <div className="order-number-block">
            <div className="order-rol">
              <div className="order-col">
                <div className="block-circle">1</div>
                <div class="number-intro">銷售人員與客戶簽訂產品訂購單</div>
              </div>
              <img className="block-arrow" src={arrow} alt="arrow" />
              <div className="order-col">
                <div className="block-circle">2</div>
                <div class="number-intro">專業技師現場安裝電動麻將桌</div>
              </div>
              <img className="block-arrow" src={arrow} alt="arrow" />
            </div>
           
            <div className="order-rol">
              <div className="order-col">
                <div className="block-circle">3</div>
                <div class="number-intro">
                  專業技師現場安裝電動麻將桌客戶電動麻將桌實際操作,保養說明
                </div>
              </div>
              <img className="block-arrow" src={arrow} alt="arrow" />
              <div className="order-col">
                <div className="block-circle">4</div>
                <div class="number-intro">
                  客戶收取工作單客戶聯及電動麻將桌產品保固卡
                </div>
              </div>
            </div>
          </div>
          <div className="order-number-text"></div>
          <Link to="/">
            <div className="order-btn">深入了解我們的服務</div>
          </Link>
        </div>
      </div>
    );
  }
}
