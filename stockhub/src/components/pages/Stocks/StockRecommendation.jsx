import React, { useContext, useState, useEffect } from 'react';
import './Stock.css';
import { StockContext } from './StockContext';
import axios from 'axios';
import ProfilePageTrade from '../ProfilePage/NewProfilePage/ProfileTrade/ProfilePageTrade';
import { Button } from '../../ui/Button';
import TechnicalAnalysisWidget from '../../ui/TechnicalAnalysisWidget';
import Popper from '../../ui/Popper';

import {
	Typography,
	Avatar,
	Divider,
	Grid,
	Popover,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ButtonGroup,
} from '@material-ui/core';

function StockRecommendation() {
	const [currentPrice, setCurrentPrice] = useState(0);
	const [openPrice, setOpenPrice] = useState(0);
	const [percentage, setPercentageChange] = useState(0);

	const [buy, setBuy] = useState(0);
	const [sell, setSell] = useState(0);
	const [period, setPeriod] = useState(0);

	const [strongBuy, setStrongBuy] = useState(0);
	const [strongSell, setStrongSell] = useState(0);
	const [hold, setHold] = useState(0);

	const [stockSymbol] = useContext(StockContext);
	const [className, setClassName] = useState('');


	useEffect(() => {
		axios
			.get(
				`https://finnhub.io/api/v1/stock/recommendation?symbol=${stockSymbol}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				const allData = res.data[0];
				setBuy(allData.buy);
				setSell(allData.sell);
				setStrongBuy(allData.strongBuy);
				setStrongSell(allData.strongSell);
				setHold(allData.hold);
				setPeriod(allData.period);
			});
	}, [stockSymbol]);

	useEffect(() => {
		axios
			.get(
				`https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				setCurrentPrice(res.data.c);
				setOpenPrice(res.data.o);
				setPriceClassName();
				setPercentageChange((currentPrice / openPrice) * 100 - 100);
			});
	}, [stockSymbol]);

	const setPriceClassName = () => {
		if (buy < sell) {
			setClassName('price-reduce');
		} else {
			setClassName('price-increase');
		}
	};


	const items = [
		{ name: `Buy: ${buy}`, content: "Number of recommendations that fall into the Buy category" },
		{ name: `Sell: ${sell}`, content: "Number of recommendations that fall into the Sell category" },
		{ name: `Hold: ${hold}`, content: "Number of recommendations that fall into the Hold category" },
		{ name: `Strong buy: ${strongBuy}`, content: "Number of recommendations that fall into the Strong buy category" },
		{ name: `Strong sell: ${strongSell}`, content: "Number of recommendations that fall into the Strong Sell category" },
		{ name: `Period: ${period}`, content: "Updated period" }

	];
	  

	const CharacterGrid = ({ items }) => {
		return (  
			<div className='popper-container'>
				{items.map(item => (
					<Popper popperData={item} />
				))}
			</div>
		)
	}  

	return (
		<div className='stock-recommendation-container-outer'>
			<Divider />
			<Typography variant='h5' component='h2' style={{ margin: '20px', color:'#f00946', fontSize: '40px' }}>
				Recommendation for {stockSymbol}!
			</Typography>
			<Divider style={{ margin: '0 20px' }} />
			<div className='stock-recommendation-container-inner'>
				<List>
					<ListItem>
						<ListItemText>{CharacterGrid({items})}</ListItemText>
					</ListItem>
					<ListItem>
						<ListItemText></ListItemText>
						<ListItemText className={className}>This stock is currently costs: {currentPrice}</ListItemText>
					</ListItem>
					{/* <ListItem>
						<TechnicalAnalysisWidget stockSymbol={stockSymbol} />
					</ListItem> */}
				</List>
			</div>
		</div>
	);
}

export default StockRecommendation;
