import React, { InputHTMLAttributes, Ref } from "react";
import styles from "./input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Input = React.forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>Amount</label>
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
