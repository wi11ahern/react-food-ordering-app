import { MouseEventHandler } from "react";
import styles from "./backdrop.module.css";

interface Props {
  onClickHandler: MouseEventHandler;
}

const Backdrop = (props: Props) => {
  return <div className={styles.backdrop} onClick={props.onClickHandler} />;
};

export default Backdrop;
