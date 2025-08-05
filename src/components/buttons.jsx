import React from "react";

const Button = ({
  btnText,
  className,
  isPrefixIcon = false,
  prefixIcon,
  isSuffixIcon = false,
  suffixIcon,
}) => {
  return (
    <button className={`${className} flex items-center gap-2`}>
      {isPrefixIcon && <img src={prefixIcon} alt="button-icon" />}
      {btnText}
      {isSuffixIcon && <img src={suffixIcon} alt="button-icon" />}
    </button>
  );
};

export default Button;
