import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { loginToFirebase, rememberLoginUser } from '../actions'
import { StoreContext } from "../context"

const LoginCard = ({ redirect }) => {
  const { state: { userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };

  const onChange = e => {
    rememberLoginUser(dispatch, e.target.checked);
  }

  useEffect(() => {
    if (userInfo) history.push(redirect);
  }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <card>
      <h1 className="login-card-head">登入</h1>
      <hr className="cardLine"></hr>
      <Form
        name="normal_login"
        className="login-form"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
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
          hasFeedback
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-Mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            name="remember"
            noStyle
          >
            <Checkbox onChange={onChange} checked={remember}>Remember me</Checkbox>
          </Form.Item>

          <Link className="login-form__forgot" to={"/"}>
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          {loading ? (
            <Button
              type="primary"
              htmlType="submit"
              className="login-form__button"
              loading
            >
              Log in
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className="login-form__button"
            >
              登入
            </Button>
          )}
          <br/>
          還沒註冊會員？ <Link to={"/register?redirect=shipping"}>立即註冊！</Link>
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
export default LoginCard;
