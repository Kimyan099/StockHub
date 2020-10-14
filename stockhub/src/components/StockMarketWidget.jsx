import React, { useEffect } from 'react'

function StockMarketWidget() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
        script.async = true;
        script.innerHTML = JSON.stringify({"colorTheme": "dark",
        "dateRange": "12M",
        "exchange": "US",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": false,
        "width": "450",
        "height": "500",
        "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
        "plotLineColorFalling": "rgba(33, 150, 243, 1)",
        "gridLineColor": "rgba(240, 243, 250, 1)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
        "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)"})
        document.getElementById("myContainer").appendChild(script)}, [])

    return (
        <div id="myContainer">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>

    )


}

export default StockMarketWidget

