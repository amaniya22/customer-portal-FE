import React from "react";
import { Checkbox, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../../../redux/slices/userAuthSlice";
import Button from "../../buttons";
import PATHS from "../../../routes/path";

const LoginForm = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const handleSubmitLogForm = async () => {
    try {
      // gets all the form field values
      const values = await form.validateFields();
      const res = await dispath(loginUserThunk(values));

      if (res.type?.endsWith("/fulfilled")) {
        navigate(PATHS.DASHBOARD);
      } 
      else {
        alert(res.payload?.message || "Login Failed");
      }
    } catch (err) {
      console.log('Validation failed', err)
    }
  };

  return (
    <div className="auth-form-content mt-10 flex items-center flex-col w-full px-15">
      <p className="m-0 mb-8 text-black auth-form-title">Login</p>

      <Form
        name="login"
        initialValues={{ remember: true }}
        layout="vertical"
        className="w-full"
        form={form}
      >
        <Form.Item
          label="Username"
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
              <p className="auth-form-link m-0">
                Forgot password
              </p>
            </Link>
          </Flex>
        </Form.Item>

        <Form.Item className="text-center auth-form-item">
          <Button
            btnText="Login"
            className="btn-primary-blue rounded-md text-white w-full mb-4 flex justify-center"
            onClickHandler={handleSubmitLogForm}
          />
          or{" "}
          <Link to={PATHS.SIGNUP}>
            <p className="auth-form-link m-0">
              Register now!
            </p>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
