import React from "react";
import css from "./InputUI.module.css";

const InputUI = (props) => {
  return (
    <div className={css.inputContainer}>
      <input className={css.input} {...props} placeholder=" " />
      <div className={css.placeholder}>{props.holder}</div>
    </div>
  );
};

export default InputUI;
