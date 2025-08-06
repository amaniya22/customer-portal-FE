import React from "react";
import Button from "../../components/buttons";
import { PortaImages } from "../../assets/img";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-pg-container h-auto min-h-screen w-screen p-20 flex items-center bg-white">
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <p className="m-0 home-title text-black leading-[80px]">
            Customer <br />
            <span className="home-title-highlight">Feedback</span> Portal
          </p>
          <p className="text-black home-descp mt-6">
            The Number #1 online platform where you can submit your feedback,
            suggestions, and ratings about our products. It's a dedicated space
            for customers to share their thoughts and experiences, fostering a
            sense of community and enabling businesses to gather valuable
            insights.
          </p>

          <div className="flex gap-6 mt-11">
            <Link to='/auth/sign-up'>
              <Button
                btnText="SIGN UP"
                className="btn-primary-blue rounded-md text-white"
              />
            </Link>
            <Link to='/auth/login'>
              <Button btnText="LOGIN" className="btn-primary-blue-outline" />
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={PortaImages.HomeImages.HomePGImage}
            alt="home-banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
