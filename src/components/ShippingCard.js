import { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Row, Button, Select, Empty, Steps, Radio, Form, Input } from "antd";
import { StoreContext } from "../context";
import { cartItemAdd, cartItemRemove, saveShippingAddress } from "../actions";

const { Option } = Select;
const { Step } = Steps;

export default function ShippingCard() {
    const { state: { cart: { shippingAddress } }, dispatch } = useContext(StoreContext);
    const history = useHistory()
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        saveShippingAddress(dispatch, values)
        history.push('/payment');
    };

    return (
        <div className="shoppingbag">
            <div className="shoppinglist-position">
                <Link to="/shoppingbag" className="shoppingbag-btn-style-1">
                    <img className="previous-img" src="/images/上一頁.png" />
                    上一步
                </Link>
                <Steps className="shoppingbag-steps" current={1}>
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
                        className="shipping-form"
                        initialValues={shippingAddress}
                        form={form}
                    >
                        <Form.Item
                            label="Full Name: "
                            name="fullName"
                            rules={[
                                {
                                    type: "string",
                                },
                                {
                                    required: true,
                                    message: "Please input your full name",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Enter full name" />
                        </Form.Item>
                        <Form.Item
                            label="Address: "
                            name="address"
                            rules={[
                                {
                                    type: "string",
                                },
                                {
                                    required: true,
                                    message: "Please input your address",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Enter Address" />
                        </Form.Item>
                        <Form.Item
                            label="City: "
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your city",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Enter city" />
                        </Form.Item>

                        <Form.Item
                            label="Postal Code: "
                            name="postalCode"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your postal code",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Enter postal code" />
                        </Form.Item>

                        <Form.Item
                            label="Country: "
                            name="country"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your country",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Enter country" />
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
