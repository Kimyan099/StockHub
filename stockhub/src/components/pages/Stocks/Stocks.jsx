import React, { useEffect, useContext } from 'react';
import StockSearchBar from './StockSearchBar';
import { StockContext } from './StockContext';
import TradingViewWidget from 'react-tradingview-widget';
import StockBuySell from './StockBuySell';
import StockDetails from './StockDetails';
import './Stock.css';

const Stocks = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [stock] = useContext(StockContext);

	return (
		<div style={{ textAlign: 'center', backgroundColor: '#1c2237' }}>
			<StockSearchBar />
			<StockDetails />
			<TradingViewWidget
				symbol={stock}
				locale='eng'
				width='1000'
				height='500'
				theme='Dark'
			/>
			<StockBuySell />
		</div>
	);
};

export default Stocks;
