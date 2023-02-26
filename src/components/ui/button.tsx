import { MouseEventHandler, ReactNode } from "react";

import styles from "./button.module.css";

interface Props {
  type: "button" | "submit" | "reset";
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

const Button = (props: Props) => {
  return (
    <button
      type={props.type}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
