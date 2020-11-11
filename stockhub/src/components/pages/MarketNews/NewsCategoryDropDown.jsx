import React, { useState, useContext, useEffect } from 'react';
import { NewsContext } from './NewsContext';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';

export default function NewsCategoryDropDown() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [categories, setCategories] = useState([]);
	const { news, setNews } = useContext(NewsContext);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
			<MenuItem onClick={updateNewsList(category)}>
				{upperCaseCategory}
			</MenuItem>
		);
	};

	const updateNewsList = (category) => {
		axios.get(`http://localhost:8080/news/category/${category}`).then((res) => {
			setNews(res.data);
		});
	};

	return (
		<div>
			<Button
				aria-controls='simple-menu'
				aria-haspopup='true'
				onClick={handleClick}
			>
				Open Menu
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<div>{categories.map((category) => getCategories(category))}</div>
			</Menu>
		</div>
	);
}
