import React from "react";
import { FaCoins } from "react-icons/fa";
import css from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <div className={css.navbar}>
        <FaCoins fill="#6900ff" className={css.icon} />
        <h1>
          Coin <span className={css.purple}>Search</span>
        </h1>
      </div>
    </Link>
  );
}

export default Navbar;
