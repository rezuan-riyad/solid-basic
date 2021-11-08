import Layout from "../components/Layout";
import CartLayout from "../components/CartLayout";

const Cart = ({ cart, setCart }) => {
  return (
    <Layout>
      <div style={{ width: "500px", margin: "0 auto" }}>
        <CartLayout cart={cart} setCart={setCart} />
        {
          cart()[0] ? 
          <button class="btn">Proceed To Pay</button> :
          <p class="grey-text">No items in Cart</p>
        }
      </div>
    </Layout>
  );
};

export default Cart;
