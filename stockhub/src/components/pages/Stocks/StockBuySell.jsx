import React, { useContext, useState, useEffect } from 'react';
import { Button } from '../../ui/Button';
import './Stock.css';
import { StockContext } from './StockContext';
import axios from 'axios';

function StockBuySell() {
	const [currentPrice, setCurrentPrice] = useState(0);
	const [stock] = useContext(StockContext);
	const [stockImageLink, setStockImageLink] = useState('');
  const [bought, setBought] = useState(0);
  const [increase, setIncrease] = useState(0);
  const [decrease, setDeacrese] = useState(0);
	const [stockName, setStockName] = useState('');

	const buyStock = () => {
		axios
			.get(
				`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				setCurrentPrice(res.data.c);
				setStockName(stock);
				setBought(bought + 1);
			});
	};

	const sellStock = (event) => {
		axios
			.get(
				`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				setCurrentPrice(res.data.c);
				setStockName(stock);
        setDeacrese(decrease - 1);
        console.log(event);
        
        axios 
          .post(`http://localhost:8080/sell`,
          {
						price: currentPrice,
						symbol: stock,
						name: stockName,
						imageLink: stockImageLink,
					},
					{ withCredentials: true }
				)

				.then((response) => {})
			})
	};

	const getStockImage = () => {
		axios
			.get(
				`https://finnhub.io/api/v1//stock/profile2?symbol=${stock}&token=bu21m3v48v6u9tetnbig`
			)
			.then((res) => {
				if (res.data.logo) {
					setStockImageLink(res.data.logo);
				} else {
					setStockImageLink(
						'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/50px-No_image_available.svg.png'
					);
				}
			});
	};

	useEffect(() => {
		if (currentPrice != 0) {
			axios
				.post(
					`http://localhost:8080/buy`,
					{
						price: currentPrice,
						symbol: stock,
						name: stockName,
						imageLink: stockImageLink,
					},
					{ withCredentials: true }
				)

				.then((response) => {});
		}
  }, [bought]);

  
  useEffect(() => {
		if (currentPrice != 0) {
			axios
				.post(
					`http://localhost:8080/sell`,
					{
						price: currentPrice,
						symbol: stock,
						name: stockName,
						imageLink: stockImageLink,
					},
					{ withCredentials: true }
				)

				.then((response) => {});
		}
	}, [decrease]);

	return (
		<div>
			<div className='stock-button-container'>
				<div className='button-buy'>
					<Button
						buttonColor='green'
						onClick={() => {
							getStockImage();
						}}
					>
						Buy
					</Button>
					<div className='button-sell'>
						<Button
              buttonColor='red'
							onClick={(event) => {
								sellStock(event);
							}}
						>
							Sell
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StockBuySell;
