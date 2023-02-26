import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./meal-item-form.module.css";

interface Props {
  onAddToCart: Function;
}

const MealItemForm = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(1);

  const onQuantityChangeHandler = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setQuantity(Number(target.value));
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    props.onAddToCart(quantity);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        type="number"
        value={quantity}
        onChange={onQuantityChangeHandler}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
