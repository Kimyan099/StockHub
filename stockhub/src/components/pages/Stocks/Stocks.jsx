import React, { useEffect, useContext } from "react";
import StockSearchBar from "./StockSearchBar";
import { StockContext } from "./StockContext";
import TradingViewWidget from "react-tradingview-widget";

const Stocks = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [stock] = useContext(StockContext);

  return (
    <div style={{textAlign:'center', backgroundColor: '#1c2237'}}>
      <StockSearchBar></StockSearchBar>
      <br></br>
      <br></br>
      <TradingViewWidget
        symbol={stock}
        locale="eng"
        width="1000"
        height="500"
        theme='Dark'
      />
    </div>
  );
};

export default Stocks;
