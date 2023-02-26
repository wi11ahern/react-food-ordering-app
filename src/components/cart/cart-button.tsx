import { useContext, useEffect, useState } from "react";
import CartContext from "../store/cart-context";
import styles from "./cart-button.module.css";
import CartModal from "./cart-modal";

interface Props {}

const CartButton = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let runningQuantity = 0;
    for (const key in cartItems) {
      runningQuantity += cartItems[key].quantity;
    }

    setTotalQuantity(runningQuantity);
  }, [cartItems]);

  const toggleCartHandler = () => {
    setShowCart((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <button className={styles["cart-button"]} onClick={toggleCartHandler}>
        <span>Cart Icon</span>
        <span>Your Cart</span>
        <span>{totalQuantity}</span>
      </button>
      {showCart && <CartModal toggleCartHandler={toggleCartHandler} />}
    </>
  );
};

export default CartButton;
