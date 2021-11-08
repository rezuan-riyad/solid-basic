import { createEffect, createSignal } from "solid-js";
import CartLayout from "../components/CartLayout";
import Layout from "../components/Layout";
import { productsData } from "../data/products";

const Products = ({ cart, setCart }) => {
  const [products, setProducts] = createSignal([]);
  createEffect(() => setProducts(productsData));

  const renderAvailability = (qty) => {
    if (qty >= 10) {
      return <span class="green-text">Available</span>;
    } else if (qty > 0 && qty < 10) {
      return <span class="red-text">Almost sold out</span>;
    } else {
      return <span class="red-text">Not Available</span>;
    }
  };

  const handleAddToCart = (product) => {
    let existingItems = cart().filter((item) => item.id === product.id);
    if (existingItems.length === 0) {
      setCart([
        ...cart(),
        { id: product.id, name: product.name, qty: 1, price: product.price },
      ]);
    } else {
      setCart([
        ...cart().map((elem) => {
          if (elem.id === product.id) return { ...elem, qty: elem.qty + 1 };
          return elem;
        }),
      ]);
    }
  };

  console.log(cart());

  return (
    <Layout>
      <div class="container">
        <div class="row">
          <div class="col s12 m8">
            <h4>Products</h4>
            <div class="row">
              {products().map((product) => (
                <div class="col s6">
                  <div class="card" style={{ margin: "1rem 0" }}>
                    <div class="card-content">
                      <h5>{product.name}</h5>
                      <h6>{product.description}</h6>
                      <h6>{renderAvailability(product.qty)}</h6>
                      <h6> Price: ${product.price}</h6>
                      <button
                        class="waves-effect waves-light btn btn-small"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="col s12 m4" style={{ marginLeft: "1rem" }}>
            <h4>Cart</h4>
            <div class="card" style={{ marginTop: "1rem", padding: "1rem" }}>
              <CartLayout cart={cart} setCart={setCart} />
              <button class="btn">Proceed To Pay</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
