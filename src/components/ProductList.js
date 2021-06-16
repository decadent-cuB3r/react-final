import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import dice from "../images/dice.png";
import NavItem from "./NavItem";

export default function ProductList({ products }) {
  return (
    <div>
      <div className="productlist-container">
        <div className="productlist">
          <img src={dice} alt="dice" />
          <h1 className="productlist-title">產品資訊</h1>
          <img src={dice} alt="dice" />
        </div>
        <div className="productlist-NavBar">
          <NavItem
            to="/product/tables"
            activeClassName="productlist-NavBarItem--active"
            className="productlist-NavBarItem"
          >
            電動麻將桌
          </NavItem>
          <NavItem
            to="/product/tableAccessory"
            activeClassName="productlist-NavBarItem--active"
            className="productlist-NavBarItem"
          >
            電動麻將桌專用配件
          </NavItem>
          <NavItem
            to="/product/mahjong"
            activeClassName="productlist-NavBarItem--active"
            className="productlist-NavBarItem"
          >
            手打麻將
          </NavItem>
          <NavItem
            to="/product/other"
            activeClassName="productlist-NavBarItem--active"
            className="productlist-NavBarItem"
          >
            周邊商品
          </NavItem>
        </div>
      </div>
      <Row  className="product-block" gutter={[32, 32]}>
        {products.map((product) => (
          <Col
            key={product.id}
            sm={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            xxl={{ span: 6 }}
          >
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
      
    </div>
  );
}
