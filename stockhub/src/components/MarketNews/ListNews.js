import React, { useState, useContext } from 'react';
import { NewsContext } from './NewsContext';

const ListNews = (props) => {
  const [news] = useContext(NewsContext);
  // console.log([news]);

  return (
    <div>
      {news.map((newsBlock) => (
        <div>
          <img style={imageStyle} src={newsBlock.image}></img>
          <p>{newsBlock.headline}</p>
          <a href=''>Read More</a>
          <br></br>
        </div>
      ))}
    </div>
  );
};

const imageStyle = {
  width: '30%',
  height: 'auto',
};

export default ListNews;
