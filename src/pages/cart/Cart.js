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
    <div className="">
      <div>
        <h1 className="text-4xl font-bold text-center mt-5">Your Cart Items</h1>
      </div>
      <div className="flex justify-evenly">
        <div>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartProductContainer data={product} />;
            }
            return null;
          })}
        </div>
        {getTotalCartAmount() > 0 ? (
          <div className="text-center my-5">
            <p>
              Subtotal:
              <span className="text-xl font-bold">
                &#x20B1;{getTotalCartAmount()}
              </span>
            </p>
            <button
              className="my-2 py-2 px-3 mx-1 border bg-slate-900 text-slate-200"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
            <button className="my-2 py-2 px-3 mx-1 border bg-slate-900 text-slate-200">
              Checkout
            </button>
          </div>
        ) : (
          <h1 className="text-center">Your Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
