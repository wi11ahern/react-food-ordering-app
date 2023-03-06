import { MouseEventHandler, useContext, useState } from "react";

import Backdrop from "../ui/backdrop";
import Card from "../ui/card";
import CartContext from "../store/cart-context";
import CartItem from "./cart-item";
import ReactDOM from "react-dom";
import styles from "./cart-modal.module.css";
import OrderForm from "../order/order-form";

interface Props {
  toggleCartHandler: MouseEventHandler;
}

const CartModal = (props: Props) => {
  const { cartItems } = useContext(CartContext);
  const [showOrderForm, setShowOrderForm] = useState(false);

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

  const orderHandler = () => {
    setShowOrderForm((prevState) => !prevState);
  };

  const backToCartHandler = () => {
    setShowOrderForm(false);
  };

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
              <button
                className={styles["button--alt"]}
                onClick={props.toggleCartHandler}
              >
                Close
              </button>
              <button
                disabled={totalPrice <= 0}
                className={styles.button}
                onClick={orderHandler}
              >
                Order
              </button>
            </div>
          </footer>
        </Card>,
        document.getElementById("cart-portal")!
      )}
      {ReactDOM.createPortal(
        <Backdrop onClickHandler={props.toggleCartHandler} />,
        document.getElementById("backdrop-portal")!
      )}
      {showOrderForm && (
        <OrderForm orderTotal={totalPrice} onBackToCart={backToCartHandler} />
      )}
    </>
  );
};

export default CartModal;
