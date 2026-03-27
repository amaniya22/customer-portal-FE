import React from "react";
import { PortalImages } from "../../assets/img/index.js";
import PATHS from "../../routes/path.js";
import ForgotPassword from "../../components/forms/auth/forgotPassword.jsx";
import LoginForm from "../../components/forms/auth/loginForm.jsx";
import SignUpForm from "../../components/forms/auth/signUpForm.jsx";

const SignUp = () => {
  return (
    <div className="auth-pg-container h-auto min-h-screen bg-white content-center">
      <div className="auth-pg-content p-16 flex">
        <div className="auth-form-section rounded-3xl flex">
          <div className="auth-img-div rounded-l-3xl content-center">
            <img
              src={PortalImages.AuthPGImage.AuthPGImage}
              alt="banner-image"
              className="rounded-l-3xl"
            />
          </div>
          <div className="auth-form-div w-1/2 flex justify-center">
            {window.location.pathname === PATHS.LOGIN && <LoginForm />}{" "}
            {window.location.pathname === PATHS.SIGNUP && <SignUpForm />}
            {window.location.pathname === PATHS.FORGOTPASSWORD && <ForgotPassword />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
