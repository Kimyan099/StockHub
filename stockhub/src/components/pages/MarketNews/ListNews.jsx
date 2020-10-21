import React, { useContext, useEffect } from 'react';
import { NewsContext } from './NewsContext';
import NewsBlock from './NewsBlock';
import './ListNews.css';

const ListNews = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [news] = useContext(NewsContext);
	return (
		<div className='market-news-container'>
			<div style={listNewsStyle}>
				{news.map((newsBlock) => (
					<div>
						<NewsBlock
							id={newsBlock.id}
							image={newsBlock.image}
							headline={newsBlock.headline}
							summary={newsBlock.summary}
							url={newsBlock.url}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

const listNewsStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'left',
	flexWrap: 'wrap',
  gap: '20px',
  paddingBottom: '80px',
};

export default ListNews;
