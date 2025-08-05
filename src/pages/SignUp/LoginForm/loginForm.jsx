import React from "react";
// import { Form } from "antd";
import { Form, Input } from "antd";

const LoginForm = () => {
  return (
    <div className="auth-form-content mt-16 flex items-center flex-col">
      <p className="m-0 text-black auth-form-title">Login</p>

      <Form className="gap-8 flex w-100 flex-col">
        <Form.Item
          layout="vertical"
          label="Username or Email"
          name="username"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Password"
          name="password"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
