import React from "react";
const index = ({
  type = "button",
  children,
  variant = "bg-cultured",
  classStyle,
  click,
}) => {
  return (
    <button
      type={type}
      className={`${variant} ${classStyle} btn`}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default index;
