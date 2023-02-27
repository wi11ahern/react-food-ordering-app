import { SyntheticEvent, useContext, useEffect, useRef } from "react";

import CartContext from "../store/cart-context";
import styles from "./cart-item.module.css";

export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props extends CartItemProps {}

const CartItem = (props: Props) => {
  const context = useContext(CartContext);
  const intervalRef = useRef<any>(null);
  const cartItem: CartItemProps = {
    id: props.id,
    name: props.name,
    price: props.price,
    quantity: 1,
  };

  useEffect(() => {
    return () => stopCounter();
  }, []);

  const startQuantityDecreaseCounter = (
    e: SyntheticEvent<HTMLButtonElement>
  ) => {
    if (e.type === "click") {
      context.removeFromCartHandler(cartItem);
    } else {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        context.removeFromCartHandler(cartItem);
      }, 100);
    }
  };

  const startQuantityIncreaseCounter = (
    e: SyntheticEvent<HTMLButtonElement>
  ) => {
    if (e.type === "click") {
      context.addToCartHandler(cartItem);
    } else {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        context.addToCartHandler(cartItem);
      }, 100);
    }
  };

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price.toFixed(2)}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <span className={styles.quantity}>x {props.quantity}</span>
        <button
          onClick={startQuantityDecreaseCounter}
          onMouseDown={startQuantityDecreaseCounter}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          -
        </button>
        <button
          onClick={startQuantityIncreaseCounter}
          onMouseDown={startQuantityIncreaseCounter}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
