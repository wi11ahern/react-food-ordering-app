import { useContext } from "react";
import { CartItemProps } from "../../cart/cart-item";
import CartContext from "../../store/cart-context";
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
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{priceString}</div>
      </div>
      <div>
        <MealItemForm cartItemId={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
