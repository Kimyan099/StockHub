import React ,{ useContext, useState } from 'react';
import { Button } from '../../ui/Button';
import './Stock.css';
import { StockContext } from "./StockContext";
import { Link } from "react-router-dom";
import axios from "axios";


function StockBuySell() {

	const [currentPrice, setCurrentPrice] = useState(0);
	const [stock] = useContext(StockContext);


	const buyStock = () => {
			axios
				.get(
					`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu21m3v48v6u9tetnbig`
					)
				.then((res) => {
					setCurrentPrice(res.data.c);
					console.log("this is stock getch data");
					console.log(res);
					axios.post(`http://localhost:8080/buy`, {symbol:stock, price:currentPrice })
        				.then((response) => {
							console.log(response);
							console.log("its here");
				})})
	}

	const update = () => {
		buyStock()
		console.log("object");
	  };
			

	return (
		<div>
			<div className='stock-button-container'>
                <div className='button-buy'>
				    <Button buttonColor='green' onClick={update}>Buy</Button>
                <div className='button-sell'>
				<Button buttonColor='red'>Sell</Button>
                </div>
			</div>
			</div>
		</div>
	);
}

export default StockBuySell
