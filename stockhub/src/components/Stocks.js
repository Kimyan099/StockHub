import React, { useState, useEffect, useContext } from "react";
import StockSearchBar from "./StockSearchBar";
import { StockContext } from "./StockContext";
import TradingViewWidget from "react-tradingview-widget";

import SingleStockWidget from "./SingleStockWidget";

const Stocks = (props) => {

  const [stock] = useContext(StockContext);

  return (
    <div>
      <StockSearchBar></StockSearchBar>
      <SingleStockWidget symbol={stock}></SingleStockWidget>

      <TradingViewWidget
        symbol={stock}
        locale="eng"
        width="1000"
        height="500"
        theme='dark'
      />
    </div>
  );
};

export default Stocks;
