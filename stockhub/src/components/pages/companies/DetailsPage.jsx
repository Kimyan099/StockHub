import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import TradingViewWidget from "react-tradingview-widget";
import "./CompanyNews.css";




const DetailsPage = (props) => {
    const {symbol} = props.match.params;
    const [news, setNews] = useState([{}]);
    const access_token = "bu21mlf48v6u9tetnbt0";

    useEffect(() => {
        axios(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-10-12&token=${access_token}`)
            .then((res) => {
                if (res.data.length < 9){
                    setNews(res.data);
                } else {
                    setNews(res.data.slice(0,9))
                }
                
                console.log(news)
            })      
    }, [])

    const renderNews = (article) => {
        return (
            <div className="articleContainer">
                <h2>
                    <a className="newsLink" href={article.url} >{article.headline} </a>
                </h2>
                <br/>
                <div>
                    <img alt="image" src={`${article.image}`}></img>
                </div>
                <p>{article.summary}</p>
            </div>
        )
    }


    const articleStyle = () => {
        return (
            {
            }
        )
    }
    
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

        if (document.getElementById("myContainer").childElementCount === 1){
            document.getElementById("myContainer").appendChild(script)
        }
        })

    return (
    <div className="wholePage" style={{textAlign:"center"}}>
        <h1 className="CompanyName" >{props.name}</h1>
        <h2 className="CompanyDetails">Company Details</h2>
        <div id="myContainer">
            <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
            </div>
        </div>
        <h1 className="diagramTitle" >Diagram</h1>
        <div className="diagram">
            <TradingViewWidget
            symbol={symbol}
            locale="eng"
            width="1300"
            height="500"
            theme='light'
            style='3'
        />
        </div>
        <h1 className="comapnyNewsTitle" >Company News</h1>
        <div className="newsContainer">
            {news.map((article) => renderNews(article))}
        </div>

    </div>  

    )
}

export default DetailsPage
