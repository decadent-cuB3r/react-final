import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Select, Empty, Steps, Radio } from "antd";
import { StoreContext } from "../context";
import { cartItemAdd, cartItemRemove } from "../actions";

const { Option } = Select;
const { Step } = Steps;

export default function ShoppingDetail() {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(StoreContext);

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="shoppingbag">
      <Steps className="shoppingbag-steps" current={0}>
        <Step className="shoppingbag-step" title="選購品項" />
        <Step
          className="shoppingbag-step"
          title="填寫資料"
          subTitle=""
          description=""
        />
        <Step
          className="shoppingbag-step"
          title="完成訂購"
          subTitle=""
          description=""
        />
      </Steps>
      <div className="shoppingbag-text bg-yellow">購物清單</div>
      {cartItems.length === 0 ? (
        <Empty
          image="https://fireplace.tw/wp-content/themes/mrtailor/images/empty_cart_retina.png"
          description="請你去買一張電動桌"
        />
      ) : (
        cartItems.map((item) => (
          <li key={item.id} className="shoppingbag-item">
            <Link to={`/product/${item.id}`}>
              <div className="shoppingbag-image">
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
            <div className="shoppingbag-item-content">
              <div className="shoppingbag-name">{item.name}</div>
              <div className="shoppingbag-qty">
                數量:{" "}
                <Select
                  defaultValue={item.qty}
                  className="select-style"
                  onChange={(qty) => cartItemAdd(dispatch, item, qty)}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <Option key={x + 1} value={x + 1}>
                      {x + 1}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div>
              <div className="shoppingbag-price">${item.price * item.qty}</div>
              <div
                className="shoppingbag-item-delete"
                onClick={() => cartItemRemove(dispatch, item.id)}
              >
                <img
                  src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
                  alt="remove"
                />
              </div>
            </div>
          </li>
        ))
      )}
      <div className="bg-yellow shoppingbag-shipping">送貨方式</div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>面交/自取</Radio>
        <Radio value={2}>五吉宅急便</Radio>
      </Radio.Group>
      <div className="shoppingbag-total-price-wrap">
        <div>
          合計
          <br />
          運送方式：{value === 1 ? "面交/自取" : "五吉宅急便"}
        </div>
        <div className="shoppingbag-total-price">${getTotalPrice()}</div>
      </div>
      <div className="container shopping-btn-container">
        <Link to="/product"className="shoppingbag-keepshopping-btn">
          <Button className="shoppingbag-btn-style-1">
            <span style={{}}>繼續購物</span>
          </Button>
        </Link>
        <Link className="shoppingbag-checkout-btn"to="/">
          <Button className="shoppingbag-btn-style-2">
            <span style={{}}>Start Checkout</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
