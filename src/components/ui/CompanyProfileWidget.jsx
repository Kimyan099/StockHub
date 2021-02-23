import React, { useEffect, useRef } from 'react';

const CompanyProfileWidget = (props) => {
	const container = useRef(null);

	const widgetCreator = (symbol) => {
		const outerDiv = document.createElement('div');

		const script = document.createElement('script');
		script.src =
			'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
		script.async = true;
		script.innerHTML = JSON.stringify({
			symbol: `${symbol}`,

			width: 1000,
			height: 400,
			colorTheme: 'dark',
			isTransparent: true,
			locale: 'en',
		});

		outerDiv.appendChild(script);
		outerDiv.style.pointerEvents = 'none';

		container.current.innerHTML = '';
		container.current.appendChild(outerDiv);
	};

	useEffect(() => {
		widgetCreator(props.symbol);
	}, [props.symbol]);

	return (
		<div ref={container} className='company-profile'>
			<div className='tradingview-widget-container'>
				<div className='tradingview-widget-container__widget'></div>
			</div>
		</div>
	);
};

export default CompanyProfileWidget;
