import React, { useContext } from 'react';
import { NewsContext } from './NewsContext';
import './NewsDetailed.css';

const NewsDetailed = (props) => {
  const requestedNewsId = props.match.params.newsId;
  const [allNews] = useContext(NewsContext);
  let requestedNewsObject;

  for (let i = 0; i < allNews.length; i++) {
    if (allNews[i].id == requestedNewsId) {
      requestedNewsObject = allNews[i];
    }
  }

  console.log('TEST');

  return (
    <div class='about-section' style={picture}>
      <div class='inner-container'>
        <h1>
          Stocks making the biggest moves premarket: Bank of America,
          UnitedHealth, Goldman Sachs
        </h1>
        <p class='text'>
          These are the stocks posting the largest moves before the bell. These
          are the stocks posting the largest moves before the bell. These are
          the stocks posting the largest moves before the bell. These are the
          stocks posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell. These are the stocks
          posting the largest moves before the bell.
        </p>
        <div class='skills'>
          <span>Category: top news</span>
          <span>WHATEVER</span>
          <span>Source: CNBC</span>
        </div>
      </div>
    </div>
  );
};

const picture = {
  background:
    'url(https://image.cnbcfm.com/api/v1/image/105864199-1555964431050unh.jpg?v=1602677241) no-repeat left',
};

export default NewsDetailed;
