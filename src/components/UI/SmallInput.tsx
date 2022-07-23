import React from "react";

interface SmallInputProps {
  placeholder: string;
  name: string;
}

const SmallInput = ({ name, placeholder }: SmallInputProps) => {
  return (
    <div className="small-input-block">
      <input
        className="small-input"
        type="text"
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </div>
  );
};

export default SmallInput;
