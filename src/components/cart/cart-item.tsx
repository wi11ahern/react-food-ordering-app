import { SyntheticEvent, useContext } from "react";
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

  const onDecreaseQuantityHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    const cartItem: CartItemProps = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: props.quantity,
    };

    context.removeFromCartHandler(cartItem);
  };

  const onIncreaseQuantityHandler = (e: SyntheticEvent<HTMLButtonElement>) => {
    const cartItem: CartItemProps = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    };

    context.addToCartHandler(cartItem);
  };

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price}</span>
          <span className={styles.quantity}>x {props.quantity}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onDecreaseQuantityHandler}>-</button>
        <button onClick={onIncreaseQuantityHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
