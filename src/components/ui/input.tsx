import React, {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  Ref,
} from "react";

import styles from "./input.module.css";

interface Props {
  id: string;
  label: string;
  className?: string;
  value?: any;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  type?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}

const Input = React.forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  return (
    <div className={`${styles.input} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
