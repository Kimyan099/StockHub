import React, { useContext, useState, useEffect } from 'react';
import './Stock.css';
import { StockContext } from './StockContext';
import axios from 'axios';

function StockRecommendation() {
    const [currentPrice, SetCurrentPrice, openPrice, SetOpenPrice,] = useState(0);
    const [buy, setBuy] = useState(0);
    const [sell, setSell] = useState(0);
    const [period, setPeriod] = useState(0);

    const [strongBuy, setStrongBuy] = useState(0)
    const [strongSel, setStrongSell] = useState(0);
    const [hold, setHold] = useState(0);
    const [stockSymbol] = useContext(StockContext);
    
    useEffect(() => {
		axios
			.get(
				`https://finnhub.io/api/v1/stock/recommendation?symbol=${stockSymbol}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
                const allData = res.data[0];
				// setCurrentPrice(res.data.c);
				// setOpenPrice(res.data.o);
				// setPriceClassName();
                // setPercentageChange((currentPrice / openPrice) * 100 - 100);
                setStrongBuy(allData.buy);
                setHold(allData.hold);
                // setStrongSell(allData.)
                console.log(res.data[0]);
			});
	}, []);

	const setPriceClassName = () => {
		if (currentPrice < openPrice) {
			// setClassName('price-reduce');
		} else {
			// setClassName('price-increase');
		}
	};


	return (
		<div className="stock-recommendation-container">
			<p>title</p>
		</div>
	);
}

export default StockRecommendation;
