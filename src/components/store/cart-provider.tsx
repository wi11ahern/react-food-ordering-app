import { ReactNode, useReducer } from "react";
import { CartItemProps } from "../cart/cart-item";
import CartContext from "./cart-context";

interface Props {
  children?: ReactNode;
}

const cartItemsReducer = (state: any, action: any) => {
  const cartItem = action.cartItem;
  const updatedItems = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "ADD_CART_ITEM":
      if (updatedItems.hasOwnProperty(cartItem.id)) {
        updatedItems[cartItem.id].quantity += cartItem.quantity;
        return updatedItems;
      } else {
        updatedItems[cartItem.id] = cartItem;
        return updatedItems;
      }
    default:
      return updatedItems;
  }
};

const CartProvider = (props: Props) => {
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {});

  const addToCartHandler = (cartItem: CartItemProps) => {
    dispatchCartItems({ type: "ADD_CART_ITEM", cartItem: cartItem });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCartHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
