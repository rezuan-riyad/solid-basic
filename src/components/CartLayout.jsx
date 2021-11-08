const CartLayout = ({ cart, setCart }) => {
  const handleItemDelete = (item) => {
    console.log(item)
    setCart([...cart().filter((elem) => elem.id !== item.id)]);
  };
  console.log(cart())
  return (
    <div>
      <div>
        <div class="row">
          <div class="col s6">
            <h6>Product</h6>
          </div>
          <div class="col s2">
            <h6>Qty</h6>
          </div>
          <div class="col s3">
            <h6>Price</h6>
          </div>
        </div>
      </div>
      {cart()[0]
        ? cart().map((item) => (
            <div class="row">
              <div class="col s6">
                <p>{item.name}</p>
              </div>
              <div class="col s2">
                <p>{item.qty}</p>
              </div>
              <div class="col s3">
                <p>{item.price * item.qty}</p>
              </div>
              <div class="col s1">
                <p
                  class="red-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleItemDelete(item)}
                >
                  X
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default CartLayout;
