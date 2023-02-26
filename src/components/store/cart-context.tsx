import React from "react";
import { CartItemProps } from "../cart/cart-item";

export type CartItems = { [mealId: number]: CartItemProps };

export interface CartContextProps {
  cartItems: CartItems;
  addToCartHandler: Function;
  removeFromCartHandler: Function;
}

const CartContext = React.createContext<CartContextProps>({
  cartItems: {},
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
});

export default CartContext;
