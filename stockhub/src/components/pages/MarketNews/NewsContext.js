import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsCollection = (props) => {
  const [news, setNews] = useState([]);
  const token = 'bu2rf9f48v6pqlhnnvtg';

  useEffect(() => {
    axios
      .get(`https://finnhub.io/api/v1/news?category=general&token=${token}`)
      .then((res) => {
        setNews(res.data);
      });
  }, []);

  //console.log('context news: ', [news]);

  return (
    <NewsContext.Provider value={[news, setNews]}>
      {props.children}
    </NewsContext.Provider>
  );
};
