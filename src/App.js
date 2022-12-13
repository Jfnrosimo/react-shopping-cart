import { useState, useEffect } from "react";

// Import data here
import StoreItems from "./data/StoreItems.json";

// Components
import ItemBox from "./components/ItemBox";
import ItemForm from "./components/ItemForm";
import ItemFilterComponent from "./components/ItemFilterComponent";
import Cart from "./components/Cart";

// Styling
import styles from "./App.module.css";

const App = () => {
  // States
  const [storeItems, setStoreItems] = useState(StoreItems);
  const [categories, setCategories] = useState([]);
  const [cart, setCartItems] = useState([]);
  const [filterBy, setFilterBy] = useState("All");
  const [total, setTotal] = useState(0);

  const onAddNewItem = (newItem) => {
    setStoreItems([...storeItems, newItem]);
  };

  const onDeleteItem = (name) => {
    setStoreItems([...storeItems.filter((item) => item.name !== name)]);
  };

  const onAddToCart = (name) => {
    /* 
      TODO:
      1. Check if item is in cart
        > If yes, increase quantity
        > If no, add new item in cart
    */

    if (cart.find((item) => item.name === name)) {
      /* 
        TODO:
        1. Find the cart item with same name
        2. Increase quantity by 1
        3. Update state
      */
      let currentCart = cart;
      for (let index = 0; index < currentCart.length; index++) {
        if (currentCart[index].name === name) {
          currentCart[index].quantity++;
        }
      }
      setCartItems([...currentCart]);
    } else {
      // We add a new item in cart
      // This will have a quantity = 1
      let addedItem = storeItems.filter((item) => item.name === name);

      setCartItems([
        ...cart,
        {
          quantity: 1,
          name: addedItem[0].name,
          price: addedItem[0].price,
          image: addedItem[0].image,
        },
      ]);
    }
  };

  const filteredStoreItems = storeItems.filter((item) => {
    if (filterBy === "All") {
      return item;
    } else {
      return item.category === filterBy;
    }
  });

  useEffect(() => {
    let distinctCategory = [];

    for (let index = 0; index < storeItems.length; index++) {
      if (
        !distinctCategory.find(
          (category) => storeItems[index].category === category
        )
      ) {
        distinctCategory.push(storeItems[index].category);
      }
    }

    setCategories(["All", ...distinctCategory]);
  }, [storeItems]);

  // calculate the total
  useEffect(() => {
    let subTotal = cart.reduce((accum, cartItem) => {
      return accum + cartItem.price * cartItem.quantity;
    }, 0);
    setTotal(subTotal);
  }, [cart]);

  return (
    <>
      <ItemForm onAddItemFormProps={onAddNewItem} />

      {/* Filter */}
      <ItemFilterComponent
        categories={categories}
        setFilterByProps={setFilterBy}
      />

      <div className={styles.storeItemContainer}>
        {filteredStoreItems.map((item) => {
          return (
            <ItemBox
              name={item.name}
              price={item.price}
              image={item.image}
              onDeleteItemProps={onDeleteItem}
              onAddToCartProps={onAddToCart}
            />
          );
        })}
      </div>

      <h2>Cart</h2>
      <div style={{ display: "flex" }}>
        <Cart cartItems={cart} />
      </div>
      <h2>Total: P{total}</h2>
    </>
  );
};

export default App;
