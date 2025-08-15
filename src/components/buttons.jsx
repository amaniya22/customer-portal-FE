import React from "react";

const Button = ({
  btnText,
  className,
  isPrefixIcon = false,
  prefixIcon,
  isSuffixIcon = false,
  suffixIcon,
  onClickHandler,
}) => {
  return (
    <button className={`${className} flex items-center gap-2`} onClick={onClickHandler}>
      {isPrefixIcon && <img src={prefixIcon} alt="button-icon" />}
      {btnText}
      {isSuffixIcon && <img src={suffixIcon} alt="button-icon" />}
    </button>
  );
};

export default Button;
