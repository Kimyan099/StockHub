import React, { useState, useContext, useEffect } from 'react';
import { NewsContext } from './NewsContext';
import { NewsCategoryContext } from './NewsCategoryContext';
import { NewsOrderContext } from './NewsOrderContext';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

export default function NewsCategoryDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElSort, setAnchorElSort] = React.useState(null);
  const [categories, setCategories] = useState([]);
  const [news, setNews] = useContext(NewsContext);
  const [currentCategory, setCurrentCategory] = useContext(NewsCategoryContext);
  const [currentOrderType, setCurrentOrderType] = useContext(NewsOrderContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickSort = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleCloseSort = () => {
    setAnchorElSort(null);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/news/allcategories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  const getCategories = (category) => {
    let upperCaseCategory =
      category.charAt(0).toUpperCase() + category.slice(1);
    return (
      <MenuItem onClick={() => setCategory(category)}>
        {upperCaseCategory}
      </MenuItem>
    );
  };

  const updateNewsList = () => {
    console.log('Category Context in updateNews: ', currentCategory);
    axios
      .get(
        `http://localhost:8080/news/category/${currentCategory}/orderby/${currentOrderType}`
      )
      .then((res) => {
        setNews(res.data);
      });
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/news/category/${currentCategory}/orderby/${currentOrderType}`
      )
      .then((res) => {
        setNews(res.data);
      });
  }, [currentCategory, currentOrderType]);

  const setCategory = (category) => {
    setCurrentCategory(category);
  };

  const setOrder = (orderType) => {
    setCurrentOrderType(orderType);
  };

  const useStyles = makeStyles({
    buttonStyle: {
      color: 'black',
      backgroundColor: '#e8e8e8',
      borderStyle: 'solid',
      borderColor: 'black',
      border: '1px',

      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'white',
      },
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        className={classes.buttonStyle}
        onClick={handleClick}
      >
        Filter Categories
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => setCategory('allnews')}>All News</MenuItem>
        <div>{categories.map((category) => getCategories(category))}</div>
      </Menu>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        className={classes.buttonStyle}
        onClick={handleClickSort}
      >
        Sort by time
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorElSort}
        keepMounted
        open={Boolean(anchorElSort)}
        onClose={handleCloseSort}
      >
        <MenuItem onClick={() => setOrder('asc')}>Ascending</MenuItem>
        <MenuItem onClick={() => setOrder('desc')}>Descending</MenuItem>
      </Menu>
    </div>
  );
}
