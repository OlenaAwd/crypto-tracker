import React from "react";
import css from "./Coins.module.css";

const CoinItem = (props) => {
  return (
    <div className={css.coinRow}>
      <p>{props.coins.market_cap_rank}</p>
      <div className={css.imgSymbol}>
        <img src={props.coins.image} alt={props.coins.name} />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className={css.hideMobile}>
        ${props.coins.total_volume.toLocaleString()}
      </p>
      <p className={css.hideMobile}>
        ${props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
