//Import routing
import { Link } from "react-router-dom";

//Import UI
import { AiOutlineShoppingCart } from "react-icons/ai";

const navBar = () => {
  return (
    <div className="navBar bg-slate-800 py-5">
      <ul className="links flex justify-end mx-10 text-slate-100">
        <li className="mx-8 text-3xl">
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <AiOutlineShoppingCart className="text-3xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navBar;
