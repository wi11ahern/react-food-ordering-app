import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./cart-button.module.css";
import CartModal from "./cart-modal";

interface Props {}

const CartButton = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cartItems } = useContext(CartContext);
  const [buttonIsHighlighted, setButtonIsHighlighted] =
    useState<boolean>(false);
  const buttonClasses = `${styles.button} ${
    buttonIsHighlighted ? styles.bump : ""
  }`;

  useEffect(() => {
    let runningQuantity = 0;
    for (const key in cartItems) {
      runningQuantity += cartItems[key].quantity;
    }

    setTotalQuantity(runningQuantity);
  }, [cartItems]);

  useEffect(() => {
    if (!cartItems) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  const toggleCartHandler = () => {
    setShowCart((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <button className={buttonClasses} onClick={toggleCartHandler}>
        <span>Cart Icon</span>
        <span>Your Cart</span>
        <span className={styles.badge}>{totalQuantity}</span>
      </button>
      {showCart && <CartModal toggleCartHandler={toggleCartHandler} />}
    </>
  );
};

export default CartButton;
