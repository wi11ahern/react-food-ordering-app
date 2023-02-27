import { MouseEventHandler, useContext } from "react";

import Backdrop from "../ui/backdrop";
import Card from "../ui/card";
import CartContext from "../store/cart-context";
import CartItem from "./cart-item";
import ReactDOM from "react-dom";
import styles from "./cart-modal.module.css";

interface Props {
  toggleCartHandler: MouseEventHandler;
}

const CartModal = (props: Props) => {
  const { cartItems } = useContext(CartContext);

  let totalPrice = 0;
  for (const key in cartItems) {
    const cartItem = cartItems[key];
    totalPrice += cartItem.price * cartItem.quantity;
  }

  let cartItemELements = [];
  for (const key in cartItems) {
    const cartItem = cartItems[key];
    cartItemELements.push(
      <CartItem
        key={cartItem.id}
        id={cartItem.id}
        name={cartItem.name}
        quantity={cartItem.quantity}
        price={cartItem.price}
      />
    );
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Card className={styles.modal}>
          <ul className={styles["cart-items"]}>{cartItemELements}</ul>
          <footer>
            <span className={styles.total}>
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className={styles.actions}>
              <button className={styles['button--alt']} onClick={props.toggleCartHandler}>Close</button>
              <button className={styles.button}>Order</button>
            </div>
          </footer>
        </Card>,
        document.getElementById("cart-portal")!
      )}
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={props.toggleCartHandler} />,
        document.getElementById("backdrop-portal")!
      )}
    </>
  );
};

export default CartModal;
