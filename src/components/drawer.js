import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import fb from "../images/fb.png";
import line from "../images/line.png";
import HamMenu from "./ham-change.js";

export default function Hamburger() {
  const [isOnTouch, setIsOnTouch] = useState(false);
  const handleCloseDrawer = () => setIsOnTouch(false);

  return (
    <>
      <HamMenu onClick={() => setIsOnTouch(!isOnTouch)} isOnTouch={isOnTouch} />
      <Drawer
         title=" "
         placement={"right"}
         closable={false}
         onClose={handleCloseDrawer}
         visible={isOnTouch}
         key={"right"}
         width={350}
         zIndex={99}
         bodyStyle={{ backgroundColor: "#fff" }}
         headerStyle={{ backgroundColor: "#fff", color: "#fff" }}
      >
        <Link to="/" className="header-ham-text">
          關於五吉 About
        </Link>
        <Link to="/product" className="header-ham-text">
          產品資訊 Product
        </Link>
        <Link to="/compare" className="header-ham-text">
          產品比較 Compare
        </Link>
        <Link to className="header-ham-text">
          最新消息 News
        </Link>
        <Link to className="header-ham-text">
          客戶須知 Annouce
        </Link>
        <Link to className="header-ham-text">
          聯絡我們 Contect
        </Link>
        <Link className="icon-img-link" to="/">
          <img id="ham-line" className="icon-img" src={line} alt="icon" />
        </Link>
        <Link className="icon-img-link" to="/">
          <img id="ham-fb" className="icon-img" src={fb} alt="icon" />
        </Link>
      </Drawer>
      
    </>
    
  );
}
