import { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Select, Empty, Steps, Radio } from "antd";
import { StoreContext } from "../context";
import { cartItemAdd, cartItemRemove } from "../actions";

const { Option } = Select;
const { Step } = Steps;

export default function ShoppingDetail() {
  const { state: { cart: { cartItems } }, dispatch } = useContext(StoreContext);
  const history = useHistory();
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

  const checkoutHandler = () => {
    if (value === 1) {
      history.push("login?redirect=payment");
    } else {
      history.push("/login?redirect=shipping");
    }
  }

  return (
    <div className="shoppingbag">
      <div className="shoppinglist-position">
        <Link to="/product" className="shoppingbag-btn-style-1">
          <img className="previous-img" src="/images/上一頁.png" alt="No-Warning"/>
          繼續購物
        </Link>
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
            title="付款方式"
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
        <div className="shoppingbag-text bg-yellow">購物車</div>
        <div className="cart-outline">
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
                <div className="price-delete-block">
                  <div className="shoppingbag-price">
                    ${item.price * item.qty}
                  </div>
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
        </div>

        <Radio.Group onChange={onChange} value={value} className="transport">
          <div className=" shoppingbag-shipping">
            <span className="deliver">送貨方式：</span>
            <Radio value={1}>面交/自取</Radio>
            <Radio value={2}>五吉宅急便</Radio>
          </div>
        </Radio.Group>
      </div>
      <div className="summary-position">
        <div className="summary-block">
          <div className="summary-inside-block">
            <div className="summary-text-total">總計</div>
            <hr className="summaryLine" />
            <div className="summary-text">
              小計：<span className="summary-float">${getTotalPrice()}</span>
              <br />
              運費：<span className="summary-float">$0</span>
              <br />
              <span className="discount">使用優惠代碼</span>
            </div>
            <hr className="summaryLine" />
            <div className="shoppingbag-total-price-wrap">
              <div className="summary-text">
                運送方式：
                <br />
                合計
              </div>

              <div className="shoppingbag-total-price">
                {value === 1 ? "面交/自取" : "五吉宅急便"}
                <br />${getTotalPrice()}
              </div>
            </div>
          </div>
        </div>
        <div className="container shopping-btn-container ">
          <Button
            className="shoppingbag-btn-style-2 "
            onClick={checkoutHandler}
          >
            <span style={{ fontSize: 18, fontWeight: "bolder" }}>
              前往結帳
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
