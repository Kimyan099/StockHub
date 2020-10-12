import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StockSearchBar from './StockSearchBar'
import {StockContext} from './StockContext'


const Stocks = props => {
    
    const [stocks, addStock] = useState([])

    const stock = useContext(StockContext)
    // const finnhub = require('finnhub');
 
    // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
    // api_key.apiKey = "bu247pn48v6uohspt4jg" 
    // const finnhubClient = new finnhub.DefaultApi()

    // finnhubClient.stockSymbols("US", (error, data, response) => {
    //     console.log(data[100])
    // });

    useEffect (() => {
        console.log("Axios call")
        axios.get("https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu247pn48v6uohspt4jg")
        .then(res => addStock(res.data.c))
      },[])


    return (
        <div>
        <StockSearchBar></StockSearchBar>
        <h2>{stock}</h2>
        </div>
    )
}

export default Stocks