import { FormEvent, useRef, useState } from "react";
import Input from "../../ui/input";
import styles from "./meal-item-form.module.css";

interface Props {
  cartItemId: number;
  onAddToCart: Function;
}

const MealItemForm = (props: Props) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const quantity = Number(inputRef.current?.value);
    if (quantity) {
      if (quantity < 1 || quantity > 5) {
        setIsValid(false);
        return;
      } else {
        setIsValid(true);
      }
    }
    props.onAddToCart(quantity);
  };

  return (
    <form className={styles.form} noValidate onSubmit={onSubmitHandler}>
      <Input
        id={`amount_${props.cartItemId}`}
        label="Amount"
        inputProps={{
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
        }}
        ref={inputRef}
      />
      {!isValid && <p>Please enter a quantity between 1 and 5.</p>}
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
