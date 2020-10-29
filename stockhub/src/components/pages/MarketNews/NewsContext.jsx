import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const NewsContext = createContext();

export const NewsCollection = (props) => {
  const [news, setNews] = useState([]);
  const token = 'bu2rf9f48v6pqlhnnvtg';

  useEffect(() => {
    axios.get(`http://localhost:8080/news`).then((res) => {
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
