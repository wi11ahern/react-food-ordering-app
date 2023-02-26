import styles from "./cart-item.module.css";

export interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props extends CartItemProps {}

const CartItem = (props: Props) => {
  return (
    <div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
      </div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
