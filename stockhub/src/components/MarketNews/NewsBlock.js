import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsBlock.css';
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
  //const newsId = this.props.match.params.newsId;

  return (
    <div>
      <Link to='/marketnews/:newsId'>
        <div className='card-block'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={props.image} />
            <Card.Body>
              <Card.Title>{props.headline}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Link>
    </div>
  );
};

export default NewsBlock;
