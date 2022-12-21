import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../GlobalState/CartContext";

const Navbar = () => {
  const { qty } = useContext(cartContext);
  return (
    <nav>
      <ul className="">
        <li>
          <Link to="/">Your Store</Link>
        </li>
      </ul>
      <ul className="">
        <li>
          <Link to="/cart">
            <span className="">
             
              <span className="">{qty}</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
