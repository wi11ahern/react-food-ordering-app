import React, { InputHTMLAttributes, Ref } from "react";
import styles from "./input.module.css";

interface Props {
  id: string;
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

const Input = React.forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props.inputProps} />
    </div>
  );
});

export default Input;
