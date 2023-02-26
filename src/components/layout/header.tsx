import CartButton from "../cart/cart-button";
import styles from "./header.module.css";

interface Props {}

const Header = (props: Props) => {
  return (
    <>
      <header className={styles.navbar}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div>
        <img src="" alt="" />
      </div>
    </>
  );
};

export default Header;
