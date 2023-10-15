import React from "react";
import css from "./InputRangeUI.module.css";

const InputRangeUI = (props) => {
  return (
    <div className={css.inputContainer}>
      <input className={css.range} {...props} placeholder=" " />
    </div>
  );
};

export default InputRangeUI;
