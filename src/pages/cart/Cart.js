//Import hook
import { useContext } from "react";

//Import shop context
import { ShopContext } from "../../context/ShopContext";

//Import data
import { PRODUCTS } from "../../data/products";

//Import cart component
import { CartProductContainer } from "./CartProductContainer";

//Import routing
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1 className="text-2xl text-center mt-5">Your Cart Items</h1>
      </div>
      <div className="">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartProductContainer data={product} />;
          }
          return null;
        })}
      </div>
      {getTotalCartAmount() > 0 ? (
        <div>
          <p>Subtotal: &#x20B1;{getTotalCartAmount()}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
