import React, { useEffect, useRef } from "react";

const SingleStockWidget = (props) => {

  const container = useRef(null);

  const widgetCreator = (symbol) => {
    const outerDiv = document.createElement("div");

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `${symbol}`,
      width: 328,
      height: 40,
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
    });

    outerDiv.appendChild(script);
    outerDiv.style.pointerEvents = "none";

    container.current.innerHTML = "";
    container.current.appendChild(outerDiv);
  };

  useEffect(() => {
    widgetCreator(props.symbol);
  }, [props.symbol]);

  return (
    <div>
      <div
      ref={container}>
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleStockWidget;
