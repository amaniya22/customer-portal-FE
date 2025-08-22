import React from "react";
import { Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Button from "../../buttons";
import PATHS from "../../../routes/path";

const ForgotPassword = () => {
  return (
    <div className="auth-form-content mt-10 flex items-center flex-col w-full px-15">
      <p className="m-0 mb-8 text-black auth-form-title">Reset Password</p>

      <Form
        name="login"
        initialValues={{ remember: true }}
        layout="vertical"
        className="w-full"
      >
        <Form.Item
          label="New Password"
          name="username"
          rules={[{ required: true, message: "Please enter your Password!" }]}
          className="auth-form-item"
        >
          <Input
            prefix={<LockOutlined />}
            placeholder="Enter New Password"
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="password"
          rules={[{ required: true, message: "Please confirm your Password!" }]}
          className="auth-form-item"
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item className="text-center auth-form-item">
          <Button
            btnText="Reset Password"
            className="btn-primary-blue rounded-md text-white w-full my-4 flex justify-center"
          />
          <Link to={PATHS.LOGIN}>
            <a href="" className="auth-form-link">
              Go Back
            </a>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
