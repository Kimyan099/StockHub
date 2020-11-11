import React, { useState, createContext } from 'react';

export const StockContext = createContext();

export const StockData = (props) => {
	const [stockSymbol, setStockSymbol] = useState('AAPL');
	return (
		<StockContext.Provider value={[stockSymbol, setStockSymbol]}>
			{props.children}
		</StockContext.Provider>
	);
};
