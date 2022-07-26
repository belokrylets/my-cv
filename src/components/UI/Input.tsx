import React from "react";

interface InputProps {
  size: string;
  type: string;
  placeholder: string;
  id: string;
  name: string;
}
const Input = ({ size, type, placeholder, name, id }: InputProps) => {
  return (
    <div className={`${size}-input-block`}>
      <input
        className={`${size}-input`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
      />
    </div>
  );
};

export default Input;
