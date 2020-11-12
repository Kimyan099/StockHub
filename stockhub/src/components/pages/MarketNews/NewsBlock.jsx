import React from 'react';
import Card from 'react-bootstrap/Card';

import './NewsBlock.css';
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
  const newsId = '/market-news/' + props.id;

  return (
    <div>
      <a href={props.url} style={{ textDecoration: 'none' }} target='_blank'>
        <div className='card-block'>
          <Card style={{ width: '18rem' }}>
            <Card.Text>{props.datetime}</Card.Text>
            <Card.Img variant='top' src={props.image} />
            <Card.Body>
              <Card.Title>{props.headline}</Card.Title>
              <br></br>
            </Card.Body>
          </Card>
        </div>
      </a>
    </div>
  );
};

export default NewsBlock;
