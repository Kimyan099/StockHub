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
    let convertedTime = timeConverter(newsBlock.datetime);

    if (newsBlock.headline.toLowerCase().includes(search.toLowerCase())) {
      return (
        <div>
          <NewsBlock
            id={newsBlock.id}
            image={newsBlock.image}
            headline={newsBlock.headline}
            summary={newsBlock.summary}
            datetime={convertedTime}
            url={newsBlock.url}
          />
        </div>
      );
    }
  };

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    if (hour < 10) {
      hour = '0' + a.getHours();
    }
    var min = a.getMinutes();
    if (min < 10) {
      min = '0' + a.getMinutes();
    }
    var sec = a.getSeconds();
    if (sec < 10) {
      sec = '0' + a.getSeconds();
    }
    var time =
      date + '-' + month + '-' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

  return (
    <div>
      <div className='news-header'>
        <h1>Market News</h1>
      </div>
      <div className='search-div'>
        <input className='search' type='text' onChange={update} />
      </div>
      <div className='drop-down'>
        <NewsCategoryDropDown />
      </div>
      <div className='elements'>
        {news.map((newsBlock) => filter(newsBlock))}
      </div>
    </div>
  );
};

export default ListNews;
