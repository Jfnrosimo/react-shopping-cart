import { useContext } from "react";

//Import shop context
import { ShopContext } from "../../context/ShopContext";

const ProductContainer = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { cartItems, addToCart } = useContext(ShopContext);

  const cartItemAmout = cartItems[id];

  return (
    <div className="flex items-center flex-col my-8">
      <img src={productImage} alt="product item" className="w-96 h-96" />
      <div className="text-center">
        <h2 className="font-bold text-2xl">{productName}</h2>
        <span className="text-xl">&#x20B1; {price}</span>
      </div>
      <button
        className="mt-4 border-2 border-slate-800 px-2 rounded-lg"
        onClick={() => addToCart(id)}
      >
        Add to cart {cartItemAmout > 0 && <>({cartItemAmout})</>}
      </button>
    </div>
  );
};

export default ProductContainer;
