import React, { useEffect } from "react";

const SingleStockWidget = (props) => {
  const widgetCreator = (symbol) => {
    const outerDiv = document.createElement("div");

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `${symbol}`,
      width: 300,
      height: 35,
      colorTheme: "dark",
      isTransparent: false,
      locale: "en",
    });

    outerDiv.appendChild(script);
    outerDiv.style.pointerEvents = "none";

    const container = document.getElementById("myContainer");
    container.innerHTML = "";
    container.appendChild(outerDiv);
  };

  useEffect(() => {
    widgetCreator(props.symbol);
  }, [props.symbol]);

  return (
    <div>
      <div id="myContainer">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleStockWidget;
