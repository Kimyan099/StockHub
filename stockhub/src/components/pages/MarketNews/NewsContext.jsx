import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsCollection = (props) => {
	const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8762/news/category/allnews/orderby/desc`)
      .then((res) => {
        setNews(res.data);
      });
  }, []);

	return (
		<NewsContext.Provider value={[news, setNews]}>
			{props.children}
		</NewsContext.Provider>
	);
};
