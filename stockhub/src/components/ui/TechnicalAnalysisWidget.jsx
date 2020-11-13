import React, { useEffect } from 'react';

function TechnicalAnalysisWidget() {
	useEffect((symbol) => {
		const script = document.createElement('script');
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
		script.async = true;
		script.innerHTML = JSON.stringify({
			interval: '1m',
			width: 425,
			isTransparent: false,
			height: 450,
			symbol: {symbol},
			showIntervalTabs: true,
			locale: 'en',
			colorTheme: 'dark',
		});
		console.log("this is symbol: "+ symbol);
		document.getElementById('myContainer').appendChild(script);
	}, []);

	return (
		<div id='myContainer'>
			<div className='tradingview-widget-container'>
				<div className='tradingview-widget-container__widget'></div>
			</div>
		</div>
	);
}

export default TechnicalAnalysisWidget;
