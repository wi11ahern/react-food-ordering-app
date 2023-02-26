import Header from "./components/layout/header";
import Meals from "./components/meals/meals";
import CartProvider from "./components/store/cart-provider";

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
