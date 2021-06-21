import { Link, useHistory } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { registerToFirebase } from "../actions";
import { StoreContext } from "../context";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = ({ redirect }) => {
  const {
    state: {
      userRegister: { userInfo, loading, error },
    },
    dispatch,
  } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    await registerToFirebase(dispatch, values);
  };

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <card>
      <h1 className="login-card-head">註冊</h1>
      <hr className="cardLine"></hr>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        className="register-form"
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="姓名"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="帳號"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="密碼"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="rePassword"
          label="密碼確認"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please re-enter your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox className="register-check">
            我已閱讀 <Link to={"/"}>隱私權條例</Link>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout} className="register-btn-position">
          {loading ? (
            <Button
              type="primary"
              className="login-form__button"
              htmlType="submit"
              loading
            >
              SIGN UP
            </Button>
          ) : (
            <Button
              type="primary"
              className="login-form__button"
              htmlType="submit"
            >
              SIGN UP
            </Button>
          )}
          <br/>
          <div className="register-text">
          已經有帳號了?{" "}
          <Link to={"/login?redirect=shipping"}><span className="login-text-color">點我登入</span></Link>
          </div>
          {error === "" ? (
            <></>
          ) : (
            <div className="login-form__error-wrap">
              <h3 className="login-form__error-title">
                <WarningOutlined className="site-form-item-icon" />
                {"  "}There was a problem
              </h3>
              <p className="login-form__error-message">{error}</p>
            </div>
          )}
        </Form.Item>
      </Form>
    </card>
  );
};
export default RegisterCard;
