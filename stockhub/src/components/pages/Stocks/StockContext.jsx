import React, { useState, createContext, useEffect } from 'react';
import axios from "axios"

export const StockContext = createContext();

export const StockData = (props) => {
	const [stock, changeStock] = useState('AAPL');
	const [stockList, setStockList] = useState([]);

	return (
		<StockContext.Provider value={[stock, changeStock, stockList, setStockList]}>
			{props.children}
		</StockContext.Provider>
	);
};
