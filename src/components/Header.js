import { useContext } from "react";
import { StoreContext } from "../context/index";
import { Badge, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import fb from "../images/fb.png";
import line from "../images/line.png";
import Drawer from "./drawer";

export default function Header() {
  const {
    state: { cartItems },
  } = useContext(StoreContext);

  const count =
    cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.qty, 0)
      : 0;

  const menu = (
    <Menu>
      <Menu.ItemGroup title="商品分類">
        <Menu.Item>
          <Link to="product/tables">電動麻將桌</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/product/tableAccessory">電動麻將桌配件</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/product/mahjong">手打麻將</Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="其他">
        <Menu.Item>
          <Link to="/compare">商品比較</Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div className="header">
      <header className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-nav">
          <Link to="/" className="header-nav-text">
            關於五吉
            <br />
            About
          </Link>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Link to="/product" className="header-nav-text">
              產品資訊
              <br />
              Product
            </Link>
          </Dropdown>
          <Link to className="header-nav-text">
            最新消息
            <br />
            News
          </Link>
          <Link to className="header-nav-text">
            客戶須知
            <br />
            Annouce
          </Link>
          <Link to className="header-nav-text">
            聯絡我們
            <br />
            Contact
          </Link>
        </div>
        <div className="header-icon">
          <Link className="icon-img-link" to="/">
            <img className="icon-img" src={line} alt="icon" />
          </Link>
          <Link className="icon-img-link" to="/">
            <img className="icon-img" src={fb} alt="icon" />
          </Link>
          <Link className="icon-img-link" to="/shoppingbag">
            <Badge
              count={count}
              size={"default"}
              style={{ color: "white", backgroundColor: "red" }}
            >
              <img className="icon-img" src={cart} alt="icon" />
            </Badge>
          </Link>
          <Drawer />
        </div>
      </header>
    </div>
  );
}
