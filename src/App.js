//Import routing
import { Routes, Route } from "react-router";

//Import component
import NavBar from "../src/components/navBar";

//Import pages
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
