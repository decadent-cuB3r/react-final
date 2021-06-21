import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Radio, Button, Steps } from "antd";
import { savePaymentMethod } from "../actions"
import { StoreContext } from "../context";
const { Step } = Steps;

export default function PaymentMethodCard() {
    const { state: { cart: { paymentMethod } }, dispatch } = useContext(StoreContext);
    const history = useHistory()
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        savePaymentMethod(dispatch, values);
        history.push('/placeorder');
    };

    const goToPreviousPath = () => {
        history.goBack()
    }

    return (
        <div className="shoppingbag">
            <div className="payment-position">
                <Link onClick={goToPreviousPath} className="shoppingbag-btn-style-1">
                    <img className="previous-img" src="/images/上一頁.png" />
                    上一步
                </Link>
                <Steps className="shoppingbag-steps" current={2}>
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
                    <Form
                        onFinish={handleSubmit}
                        name="normal_login"
                        className="payment-form"
                        initialValues={{ paymentMethod }}
                        form={form}
                    >

                        <Form.Item className="paymentMethod" name="paymentMethod" label="Payment Method: ">
                            <Radio.Group>
                                <Radio value="Google">Google</Radio>
                                <Radio value="PayPal">PayPal</Radio>
                                <Radio value="Line">Line</Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form__button"
                            >
                                Continue
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

