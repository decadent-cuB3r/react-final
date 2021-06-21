import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { logoutFromFirebase, updateUserInfo } from "../actions";
import { StoreContext } from "../context";

const ProfileCard = () => {
  const {
    state: {
      userSignin: { userInfo },
    },
    dispatch,
  } = useContext(StoreContext);
  const { displayName, email } = userInfo;
  const history = useHistory();
  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    console.log(values)
    updateUserInfo(dispatch, values);
  };

  const handleLogout = () => {
    logoutFromFirebase(dispatch);
    history.push("/");
  };
  return (
    <card>
      <h1>個人資料</h1>
      <Form
        onFinish={handleUpdate}
        name="normal_login"
        className="login-form"
        form={form}
        initialValues={userInfo}
      >
        <Form.Item
          label="姓名： "
          name="name"
          rules={[
            {
              type: "string",
              message: "The input is not valid name!",
            },
            {
              message: "Please input your name!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder={displayName} />
        </Form.Item>
        <Form.Item
          label="email: "
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              message: "Please input your E-mail!",
            },
          ]}
          hasFeedback
        >
          <Input placeholder={email} />
        </Form.Item>
        <Form.Item
          name="Password"
          label="密碼："
          rules={[
            {
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="Re-enter Password"
          label="密碼確認："
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
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

        <Form.Item className="form-btn-position">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form__button"
          >
            Submit
          </Button>

          <Button
            type="danger"
            style={{ marginTop: "0.8rem" }}
            className="login-form__button"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </Form.Item>
      </Form>
    </card>
  );
};
export default ProfileCard;
