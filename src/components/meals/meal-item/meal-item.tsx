import { useContext } from "react";
import CartContext, { CartItemProps } from "../../store/cart-context";
import MealItemForm from "./meal-item-form";
import styles from "./meal-item.module.css";

export interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface Props extends Meal {}

const MealItem = (props: Props) => {
  const context = useContext(CartContext);
  const priceString = `$${props.price.toFixed(2)}`;

  const onAddToCartHandler = (quantity: number) => {
    const cartItem: CartItemProps = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    };
    context.addToCartHandler(cartItem);
  };

  return (
    <li className={styles["meal-item"]}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{priceString}</div>
      </div>
      <div className={styles.actions}>
        <MealItemForm onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
