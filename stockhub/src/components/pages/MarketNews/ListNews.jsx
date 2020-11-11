import React, { useState, useContext, useEffect } from 'react';
import { NewsContext } from './NewsContext';
import NewsBlock from './NewsBlock';
import NewsCategoryDropDown from './NewsCategoryDropDown';
import './ListNews.css';

const ListNews = () => {
	const [news] = useContext(NewsContext);
	const [search, setSearch] = useState('');

	const update = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const filter = (newsBlock) => {
		if (newsBlock.headline.toLowerCase().includes(search.toLowerCase())) {
			return (
				<div>
					<NewsBlock
						id={newsBlock.id}
						image={newsBlock.image}
						headline={newsBlock.headline}
						summary={newsBlock.summary}
						url={newsBlock.url}
					/>
				</div>
			);
		}
	};

	return (
		<div>
			<div className='search-div'>
				<input className='search' type='text' onChange={update} />
				<NewsCategoryDropDown />
			</div>
			<div className='elements'>
				{news.map((newsBlock) => filter(newsBlock))}
			</div>
		</div>
	);
};

export default ListNews;
