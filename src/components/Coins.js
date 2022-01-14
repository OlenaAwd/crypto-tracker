import React from "react";
import CoinItem from "./CoinItem";
import css from "./Coins.module.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = (props) => {
  return (
    <div className={css.container}>
      <div>
        <div className={css.heading}>
          <p>#</p>
          <p className={css.coinName}>Coin</p>
          <p>Price</p>
          <p>24 h</p>
          <p className={css.hideMobile}>Volume</p>
          <p className={css.hideMobile}>Mkt Cap</p>
        </div>
        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
