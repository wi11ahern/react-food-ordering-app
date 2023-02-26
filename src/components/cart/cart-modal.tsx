import { MouseEventHandler, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CartContext from "../store/cart-context";
import Backdrop from "../ui/backdrop";
import Card from "../ui/card";
import CartItem, { CartItemProps } from "./cart-item";
import styles from "./cart-modal.module.css";

interface Props {
  clickOffModalHandler: MouseEventHandler;
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
          <div>
            {cartItemELements}
            <div>
              <span>Total: ${totalPrice.toFixed(2)}</span>
            </div>
            <div>
              <button>Close</button>
              <button>Order</button>
            </div>
          </div>
        </Card>,
        document.getElementById("cart-portal")!
      )}
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={props.clickOffModalHandler} />,
        document.getElementById("backdrop-portal")!
      )}
    </>
  );
};

export default CartModal;
