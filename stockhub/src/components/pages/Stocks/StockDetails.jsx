import Axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';
import { StockContext } from './StockContext';
import axios from 'axios';
import './Stock.css';

function StockDetails() {
	const [symbol, setSymbol] = useContext(StockContext);
	const [currentPrice, setCurrentPrice] = useState(0);
	const [openPrice, setOpenPrice] = useState(0);
	const [percentageChange, setPercentageChange] = useState(0);
	const [className, setClassName] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				setCurrentPrice(res.data.c);
				setOpenPrice(res.data.o);
				setPriceClassName();
				setPercentageChange(currentPrice / openPrice * 100 - 100);
				console.log(res.data);
			});
	}, [symbol]);

	const setPriceClassName = () => {
		if (currentPrice < openPrice) {
			setClassName('price-reduce');
		} else {
			setClassName('price-increase');
		}
	};

	return (
		<div>
			<p className={className}> {currentPrice}</p>
			<p className={className}>{percentageChange}</p>
		</div>
	);
}

export default StockDetails;
