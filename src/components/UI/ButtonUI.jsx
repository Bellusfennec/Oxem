import React from "react";
import css from "./ButtonUI.module.css";

const ButtonUI = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${css.button} ${css[props.color]} ${css[props.variant]}`}
      style={{padding: `${props.padding}`, margin: `${props.margin}`}}
    >
      
      {children}
    </button>
  );
};

export default ButtonUI;
