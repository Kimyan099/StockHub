import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import TradingViewWidget from "react-tradingview-widget";
import "./CompanyNews.css";
import styled from "styled-components";




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
            <div className="articleContainer" style={{height:"500px", overflow:"hidden", backgroundColor:"white", borderRadius: "10px"}}>
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
        <h1 style={{color:"#f00946", backgroundColor:"#fff", paddingTop:"40px"}}>Company News</h1>
        <br></br>
        <div className="newsContainer" style={{ padding: "40px" }}>
            {news.map((article) => renderNews(article))}
        </div>

    </div>  

    )
}

export default DetailsPage
