import Button from "./button";
import Card from "./card";
import { MouseEventHandler } from "react";
import styles from "./overlay-modal.module.css";

interface Props {
  title: string;
  message: string;
  onClickHandler: MouseEventHandler;
}

const OverlayModal = (props: Props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button type="button" onClick={props.onClickHandler}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

export default OverlayModal;
