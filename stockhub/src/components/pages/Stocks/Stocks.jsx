import React, { useEffect, useContext } from 'react';
import StockSearchBar from './StockSearchBar';
import { StockContext } from './StockContext';
import TradingViewWidget from 'react-tradingview-widget';
import StockBuySell from './StockBuySell';
import StockDetails from './StockDetails';
import './Stock.css';
import StockRecommendation from './StockRecommendation';

const Stocks = (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [stockSymbol] = useContext(StockContext);

	return (
		<div style={{ textAlign: 'center', backgroundColor: '#1c2237' }}>
			<StockSearchBar />
			<StockDetails />
			<TradingViewWidget
				symbol={stockSymbol}
				locale='eng'
				width='1000'
				height='500'
				theme='Dark'
			/>
      <StockRecommendation />
			<StockBuySell/>
		</div>
	);
};

export default Stocks;
