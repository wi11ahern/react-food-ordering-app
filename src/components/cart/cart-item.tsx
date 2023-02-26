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
    <div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
      </div>
      <div>
        <button onClick={onDecreaseQuantityHandler}>-</button>
        <button onClick={onIncreaseQuantityHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
