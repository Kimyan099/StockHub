import React, { useContext, useState } from 'react';
import { Button } from '../../ui/Button';
import './Stock.css';
import { StockContext } from './StockContext';
import axios from 'axios';

function StockBuySell() {
	const [currentPrice, setCurrentPrice] = useState(0);
	const [stockSymbol] = useContext(StockContext);



	const buyStock = () => {
		axios
			.get(
				`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				setCurrentPrice(res.data.c);
				axios
					.post(`http://localhost:8080/buy`, {
						symbol: stockSymbol,
						price: currentPrice,
					})
					.then((response) => {});
			});
	};

	const update = () => {
		buyStock();
	};

	return (
		<div>
			<div className='stock-button-container'>
				<div className='button-buy'>
					<Button buttonColor='green' onClick={update}>
						Buy
					</Button>
					<div className='button-sell'>
						<Button buttonColor='red'>Sell</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StockBuySell;
