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
          Bank of America (BAC) – The bank beat estimates by 2 cents with
          quarterly earnings of 51 cents per share, though revenue was slightly
          below Wall Street forecasts. The bank set aside $1.4 billion for
          possible loan losses, significantly smaller than the amounts it had
          set aside in the first and second quarters. CFO Paul Donofrio made
          some optimistic comments about the economic recovery, noting a “decent
          recovery” in consumer spending. Bank of America shares fell 2% in
          premarket trading as of 7:30 a.m. ET.
        </p>
        <p class='text'>
          UnitedHealth (UNH) – The health insurer reported an adjusted quarterly
          profit of $3.51 per share, beating the consensus estimate of $3.09,
          with revenue also above forecasts. UnitedHealth also said medical care
          trends that had been disrupted by the pandemic are now moving closer
          to normal. UnitedHealth also raised its full-year outlook.
        </p>
        <p class='text'>
          Goldman Sachs (GS) – Goldman earned $9.68 per share for the third
          quarter, well above the consensus estimate of $5.57, with revenue also
          above estimates. Goldman said it saw higher net revenue across all
          segments amid a continued economic recovery, with particular strength
          in asset management and global markets. Goldman shares rose 2.8% in
          premarket trading as of 7:30 a.m. ET.
        </p>
        <div class='skills'>
          <span>Category: top news</span>
          <span></span>
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
