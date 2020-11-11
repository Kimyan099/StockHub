import React, { useContext, useState } from 'react';
import './Stock.css';
import { StockContext } from './StockContext';
import axios from 'axios';

function StockRecommendation() {
	const [strongBuy, setStrongBuy] = useState(0);
	const [strongSel, setStrongSell] = useState(0);
	const [period, setperiod] = useState(0);
	const [stock] = useContext(StockContext);

	const getRecommendation = () => {
		axios
			.get(
				`https://finnhub.io/api/v1/stock/recommendation?symbol=${stock}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				console.log(res);
			});
	};

	return (
		<div>
			{console.log('vlm')}
			{getRecommendation}
		</div>
	);
}

export default StockRecommendation;
