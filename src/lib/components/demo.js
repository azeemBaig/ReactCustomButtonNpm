import React from "react";

const ButtonCustom = (props) => {
  const { label, handleClick } = props;

  return (
    <div>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export default ButtonCustom;
