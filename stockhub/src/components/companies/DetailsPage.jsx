import React, { useEffect } from "react";
import TradingViewWidget from "react-tradingview-widget";




const DetailsPage = (props) => {
    const {symbol} = props.match.params;
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
        "symbol": `${symbol}`,
        "colorTheme": "light",
        "isTransparent": false,
        "largeChartUrl": "",
        "displayMode": "adaptive",
        "width": 1535,
        "height": 800,
        "locale": "en"})
        document.getElementById("myContainer").appendChild(script)})

    return (
    <div className="wholePage" style={{textAlign:"center"}}>
        <h1 style={{color:"#f00946", backgroundColor:"#1c2237", paddingTop:"20px"}}>{props.name}</h1>
        <h2 style={{color:"#fff", backgroundColor:"#1c2237", paddingBottom:"20px"}}>Company Details</h2>
        <div id="myContainer">
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
        <h1 style={{ textAlign: "center", margin: "auto", background: "#1c2237", padding: "40px", color:"white"}}>Diagram</h1>
        <div className="diagram" style={{ textAlign: "center", margin: "auto", background: "#1c2237", paddingBottom: "40px"}}>
            <TradingViewWidget
            symbol={symbol}
            locale="eng"
            width="1300"
            height="500"
            theme='light'
            style='3'
        />
        </div>
    </div>

    )
}

export default DetailsPage
