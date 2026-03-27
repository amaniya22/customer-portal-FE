import React from "react";
import LoadingSpinnerGIF from "../assets/img/loading-spinner.json";
import Lottie from "lottie-react";

const LoadingSpinner = () => {
  return (
    <div className="loader-pg-container min-h-screen h-full w-full flex items-center bg-white justify-center">
      <div className="loading-div">
        <Lottie animationData={LoadingSpinnerGIF} loop={true} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
