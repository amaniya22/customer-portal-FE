import { Form, Input } from "antd";
import React from "react";

const SignUpForm = () => {
  return (
    <div className="auth-form-content mt-16">
      <p className="m-0 text-black auth-form-title">Sign Up</p>

      {/* <form>

        <InputFields
          labelText="Enter Email"
          inputType="email"
          placeholderValue="Enter email"
        />

        <InputFields
          labelText="Create Password"
          inputType="password"
          placeholderValue="Enter password"
        />

        <InputFields
          labelText="Re-enter Password"
          inputType="password"
          placeholderValue="Confirm username"
        />
      </form> */}

      <Form className="gap-8 flex w-100 flex-col">
        <Form.Item
          layout="vertical"
          label="Enter Username"
          name="username"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Enter First Name"
          name="fname"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Enter Last Name"
          name="lname"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          layout="vertical"
          label="Enter Email"
          name="email"
          rules={[{ required: true }]}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Input />
        </Form.Item>

        <div className="flex w-100 gap-8">
          <Form.Item
            layout="vertical"
            label="Create Password"
            name="password"
            rules={[{ required: true }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            layout="vertical"
            label="Re-enter Password"
            name="confirmPassword"
            ß
            rules={[{ required: true }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
