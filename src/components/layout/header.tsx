import CartButton from "../cart/cart-button";
import styles from "./header.module.css";
import mealsImage from "../../assets/meals.jpg";

interface Props {}

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious-looking food." />
      </div>
    </>
  );
};

export default Header;
