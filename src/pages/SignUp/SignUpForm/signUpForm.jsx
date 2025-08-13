import React from "react";
import { Form, Input } from "antd";
import {
  LockOutlined,
  MailOutlined,
  UserOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { registerUserThunk } from "../../../redux/slices/userAuthSlice";
import Button from "../../../components/buttons";
import PATHS from "../../../routes/path";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form] = useForm();

  const handleRegForm = async () => {
    try {
      const values = await form.validateFields();

      const res = await dispatch(registerUserThunk(values));

      if (res.type?.endsWith("/fulfilled")) {
        console.log("Access token:", res.payload.accessToken);
        navigate(PATHS.LOGIN);
      } else {
        alert(res.payload?.message || "Registration Failed");
      }
    } catch (err) {
      console.log("Validation failed", err);
    }
  };

  return (
    <div className="auth-form-content mt-10 flex items-center flex-col w-100">
      <p className="m-0 text-black auth-form-title mb-4 text-center">Sign Up</p>

      <Form layout="vertical" className="w-100 flex-col" form={form}>
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
          name="first name"
          rules={[{ required: true }]}
          className="auth-form-item"
        >
          <Input placeholder="Enter First Name" prefix={<IdcardOutlined />} />
        </Form.Item>

        <Form.Item
          label="Enter Last Name"
          name="last name"
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
            name="Confirm Password"
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
            onClickHandler={handleRegForm}
          />
          Already have an account!{" "}
          <Link to={PATHS.LOGIN}>
            <p className="auth-form-link m-0">Login now!</p>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
