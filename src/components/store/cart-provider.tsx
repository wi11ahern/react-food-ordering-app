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
      } else {
        updatedItems[cartItem.id] = cartItem;
      }
      return updatedItems;
    case "REMOVE_CART_ITEM":
      if (updatedItems.hasOwnProperty(cartItem.id)) {
        if (updatedItems[cartItem.id].quantity === 1) {
          delete updatedItems[cartItem.id];
        } else {
          updatedItems[cartItem.id].quantity -= 1;
        }
      }
      return updatedItems;
    default:
      return updatedItems;
  }
};

const CartProvider = (props: Props) => {
  const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {});

  const addToCartHandler = (cartItem: CartItemProps) => {
    dispatchCartItems({ type: "ADD_CART_ITEM", cartItem: cartItem });
  };

  const removeFromCartHandler = (cartItem: CartItemProps) => {
    dispatchCartItems({ type: "REMOVE_CART_ITEM", cartItem: cartItem });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCartHandler, removeFromCartHandler }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
