//Import component
import ProductContainer from "./ProductContainer";

//Import data
import { PRODUCTS } from "../../data/products";

const Shop = () => {
  return (
    <div className="shop">
      <h2 className="text-6xl text-center mt-5 py-4">Jeff's Shop</h2>
      <div className="products flex flex-row flex-wrap justify-around">
        {PRODUCTS.map((item) => {
          return <ProductContainer data={item} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
