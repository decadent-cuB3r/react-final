import React, { useState } from "react";
import { Drawer, Button } from "antd";
import {Link} from "react-router-dom"

export default function Hamburger() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" className="ham-btn" onClick={showDrawer}>
     Menu
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="hamburger"
      >
        <Link to="/" className="header-ham-text">
          關於五吉
          About
        </Link>
        <Link to="/product" className="header-ham-text">
          產品資訊
          Product
        </Link>
        <Link to className="header-ham-text">
          最新消息
          News
        </Link>
        <Link to className="header-ham-text">
          客戶須知
          Annouce
        </Link>
        <Link to className="header-ham-text">
          聯絡我們
          Contect
        </Link>
      </Drawer>
    </>
  );
}
