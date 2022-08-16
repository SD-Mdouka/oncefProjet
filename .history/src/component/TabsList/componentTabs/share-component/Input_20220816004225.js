import React from "react";

const Input = ({ type, name, placeholder, value }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="InputStyle inputInside"
      value={value}
    />
  );
};

export default Input;
