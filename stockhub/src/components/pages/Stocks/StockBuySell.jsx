import React from 'react';
import { Button } from '../../ui/Button';
import './Stock.css';

function StockBuySell() {
	return (
		<div>
			<div className='stock-button-container'>
                <div className='button-buy'>
				    <Button buttonColor='green'>Buy</Button>
                </div>
                <div className='button-sell'>
				<Button buttonColor='red'>Sell</Button>
                </div>
			</div>
		</div>
	);
}

export default StockBuySell;
