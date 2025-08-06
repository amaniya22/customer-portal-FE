import React from "react";
import { Form, Input } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Button from "../../../components/buttons";
import PATHS from "../../../routes/path";

const SignUpForm = () => {
  return (
    <div className="auth-form-content mt-10 flex items-center flex-col w-100">
      <p className="m-0 text-black auth-form-title mb-4 text-center">Sign Up</p>

      <Form layout="vertical" className="w-100 flex-col">
        <Form.Item
          label="Enter Username"
          name="username"
          rules={[{ required: true }]}
          className="auth-form-item"
        >
          <Input placeholder="Enter Username" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label="Enter First Name"
          name="fname"
          rules={[{ required: true }]}
          className="auth-form-item"
        >
          <Input placeholder="Enter First Name" prefix={<IdcardOutlined />} />
        </Form.Item>

        <Form.Item
          label="Enter Last Name"
          name="lname"
          rules={[{ required: true }]}
          className="auth-form-item"
        >
          <Input placeholder="Enter Last Name" prefix={<IdcardOutlined />} />
        </Form.Item>

        <Form.Item
          label="Enter Email"
          name="email"
          rules={[{ required: true }]}
          className="auth-form-item"
        >
          <Input placeholder="Enter Email" prefix={<MailOutlined />} />
        </Form.Item>

        <div className="flex justify-between w-100 gap-8">
          <Form.Item
            label="Create Password"
            name="password"
            rules={[{ required: true }]}
            className="auth-form-item"
          >
            <Input.Password
              placeholder="Create New Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="Re-enter Password"
            name="confirmPassword"
            rules={[{ required: true }]}
            className="auth-form-item"
          >
            <Input.Password
              placeholder="Confirm Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
        </div>

        <Form.Item className="text-center auth-form-item">
          <Button
            btnText="Sign Up"
            className="btn-primary-blue rounded-md text-white w-100 my-4 flex justify-center"
          />
          Already have an account!{" "}
          <Link to={PATHS.LOGIN}>
            <a href="" className="auth-form-link">
              Login now!
            </a>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
