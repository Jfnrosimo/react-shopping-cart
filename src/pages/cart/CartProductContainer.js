import { useContext } from "react";

import { ShopContext } from "../../context/ShopContext";

export const CartProductContainer = (props) => {
  const { id, productName, productImage, price } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="shadow-md flex items-center flex-row justify-evenly w-96 m-auto py-5 mt-4">
      <img src={productImage} alt="product item" className="w-40 h-40 mt-5" />
      <div className="text-center">
        <h2 className=" font-bold text-2xl">{productName}</h2>
        <span className="text-xl">&#x20B1; {price}</span>
        <div className="flex flex-row justify-center text-xl">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            className="w-1/4 text-center border border-slate-800 mx-2"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
