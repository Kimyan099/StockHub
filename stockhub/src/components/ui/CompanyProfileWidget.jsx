import React, { useEffect } from 'react'

function CompanyProfileWidget(props) {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js'
        script.async = true;
        script.innerHTML = JSON.stringify({"symbol": `${props.symbol}`,
        "width": 1000,
        "height": 400,
        "colorTheme": "dark",
        "isTransparent": true,
        "locale": "en"})
        document.getElementById("myContainer").appendChild(script)}, [props.symbol])

    return (
        <div id="myContainer">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>

    )


}

export default CompanyProfileWidget