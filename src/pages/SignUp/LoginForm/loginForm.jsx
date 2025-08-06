import React from "react";
import { Checkbox, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons";
import PATHS from "../../../routes/path";

const LoginForm = () => {
  return (
    <div className="auth-form-content mt-10 flex items-center flex-col w-100">
      <p className="m-0 mb-8 text-black auth-form-title">Login</p>

      <Form
        name="login"
        initialValues={{ remember: true }}
        layout="vertical"
        className="w-100"
      >
        <Form.Item
          label="Username or Email"
          name="username"
          rules={[{ required: true, message: "Please enter your Username!" }]}
          className="auth-form-item"
        >
          <Input prefix={<UserOutlined />} placeholder="Enter Username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your Password!" }]}
          className="auth-form-item"
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Item>

        <Form.Item className="auth-form-item">
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="checkbox-text" defaultChecked={false}>
                Remember me
              </Checkbox>
            </Form.Item>
            <Link to={PATHS.FORGOTPASSWORD}>
              <a href="" className="auth-form-link">
                Forgot password
              </a>
            </Link>
          </Flex>
        </Form.Item>

        <Form.Item className="text-center auth-form-item">
          <Button
            btnText="Login"
            className="btn-primary-blue rounded-md text-white w-100 mb-4 flex justify-center"
          />
          or{" "}
          <Link to={PATHS.SIGNUP}>
            <a href="" className="auth-form-link">
              Register now!
            </a>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
