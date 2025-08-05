import React from "react";
import { PortaImages } from "../../assets/img/index.js";
import PATHS from "../../routes/path.js";
import LoginForm from "./LoginForm/loginForm.jsx";
import SignUpForm from "./SignUpForm/signUpForm.jsx";

const SignUp = () => {
  return (
    <div className="auth-pg-container h-screen w-screen bg-white">
      <div className="auth-pg-content p-16">
        <div className="auth-form-section rounded-3xl flex">
          <div className="auth-img-div">
            <img
              src={PortaImages.AuthPGImage.AuthPGImage}
              alt="banner-image"
              className="auth-img rounded-l-3xl"
            />
          </div>
          <div className="auth-form-div w-1/2 flex justify-center">
            {window.location.pathname === PATHS.LOGIN && <LoginForm />}{" "}
            {window.location.pathname === PATHS.SIGNUP && <SignUpForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
