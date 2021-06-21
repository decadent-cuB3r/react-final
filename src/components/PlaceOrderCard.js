import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Steps, Row, Col } from "antd";
import { addOrdertoFirebase } from "../actions";
import { StoreContext } from "../context";
const { Step } = Steps;

export default function PaymentMethodCard() {
  const {
    state: { cart },
    dispatch,
  } = useContext(StoreContext);
  const { cartItems } = cart;
  const history = useHistory();

  const placeOrderHandler = () => {
    addOrdertoFirebase(dispatch, cart);
    history.push("/order");
  };

  const getTotalPrice = () => {
    return cartItems.length > 0
      ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  };

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  return (
    <div className="shoppingbag">
      <div className="placeorder-position">
        <Link to="/product" className="shoppingbag-btn-style-1">
          <img
            className="previous-img"
            src="/images/上一頁.png"
            alt="No-Warning"
          />
          繼續購物
        </Link>
        <Steps className="shoppingbag-steps" current={3}>
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

        <Row gutter={[24, 24]}>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 13, offset: 2 }}>
            <div className="shoppingbag-text bg-yellow">買家資料</div>
            <div className="cart-outline">
              <div className="card card-body">
                <p>
                  <strong>姓名:</strong> {cart.shippingAddress.fullName} <br />
                  <strong>地址: </strong> {cart.shippingAddress.address},
                  {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}
                  ,{cart.shippingAddress.country}
                </p>
              </div>
              <div className="card card-body">
                <p>
                  <strong>付款方式:</strong> {cart.paymentMethod}
                </p>
              </div>
            </div>
            <br />
            <div className="shoppingbag-text bg-yellow">購買商品</div>
            <div className="cart-outline">
              <div className="card card-body">
                {cartItems.length === 0 ? (
                  <div>Cart is empty</div>
                ) : (
                  cartItems.map((item) => (
                    <li key={item.id} className="cart-item">
                      <div >
                        <img className="cart-image" src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-content">
                        <div className="cart-name">{item.name}</div><br/>
                        <div className="product-qty">數量 : {item.qty}</div>
                      </div>
                      <div className="cart-item-end">
                        <div className="cart-price">
                          ${item.price * item.qty}
                        </div>
                      </div>
                    </li>
                  ))
                )}
                <div className="cart-total-price-wrap">
                  <span>總共</span>
                  <div className="cart-total-price">${getTotalPrice()}</div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 7, offset: 0 }}>
            <div className="shoppingbag-text bg-yellow">總計</div>
            <div className="cart-outline">
              <div className="card card-body">
                <div className="row">
                  <div>商品</div>
                  <div>${cart.itemsPrice}</div>
                </div>
                <div className="row">
                  <div>運費</div>
                  <div>${cart.shippingPrice}</div>
                </div>
                <div className="row">
                  <div>稅金</div>
                  <div>${cart.taxPrice}</div>
                </div>
                <hr/>
                <div className="row">
                  <div>
                    <strong> 購買總金額</strong>
                  </div>
                  <div>
                    <strong> ${cart.totalPrice}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopping-btn-container">
              <Button
                className="shoppingbag-btn-style-2 placeorder-btn"
                block
                type="primary"
                onClick={placeOrderHandler}
              >
                確認下訂
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
