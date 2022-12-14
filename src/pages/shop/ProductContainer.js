import { useContext } from "react";

//Import shop context
import { ShopContext } from "../../context/ShopContext";

const ProductContainer = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { cartItems, addToCart } = useContext(ShopContext);

  const cartItemAmout = cartItems[id];

  return (
    <div className="flex items-center flex-col m-4">
      <img src={productImage} alt="product item" className="w-96 h-96" />
      <div className="text-center">
        <h2 className=" font-bold">{productName}</h2>
        <span>&#x20B1; {price}</span>
      </div>
      <button className="mt-4" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmout > 0 && <>({cartItemAmout})</>}
      </button>
    </div>
  );
};

export default ProductContainer;
