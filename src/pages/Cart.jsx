import Layout from "../components/Layout";
import CartLayout from "../components/CartLayout";

const Cart = ({ cart, setCart }) => {
  return (
    <Layout>
      <div style={{ width: "500px", margin: "0 auto" }}>
        <CartLayout cart={cart} setCart={setCart} />
        <button class="btn">Proceed To Pay</button>
      </div>
    </Layout>
  );
};

export default Cart;
