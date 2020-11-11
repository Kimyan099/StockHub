import {
    Typography,
    Avatar,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ButtonGroup
  } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AppleIcon from '@material-ui/icons/Apple';
import React, {useContext, useState} from 'react';
import { UserContext } from "../../Register/UserContext"
import SingleStockWidget from "../../../../ui/SingleStockWidget";
import { StockContext } from "../../../Stocks/StockContext";
import axios from "axios";
import { Button } from '../../../../ui/Button';


const Trades = (props) => {
    let profilePicture = "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190423100153-01-charlie-the-otter-file.jpg";
    const [name, setName, isLoggedIn, setIsLoggedIn, contextEmail, setContextEmail ] = useContext(UserContext);
    const [currentPrice, setCurrentPrice] = useState(0);
	const [stock] = useContext(StockContext);


	const buyStock = () => {
			axios
				.get(
					`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu21m3v48v6u9tetnbig`
					)
				.then((res) => {
					setCurrentPrice(res.data.c);
					axios.post(`http://localhost:8080/buy`, {symbol:stock, price:currentPrice })
        				.then((response) => {
				})})
	}

	const update = () => {
		buyStock()
	  };


    return (
        <div className="User">

        <Divider />
        <Typography variant="h5" component="h2" style={{margin: '20px'}}>
          Owned Stocks
        </Typography>
        <Divider style={{margin: '0 20px'}} />
        <Grid container spacing={2}>
          <Grid item xs>
            <List>
              <ListItem style={{height:"120px"}}>
                <ListItemIcon>
                    <AppleIcon style={{color:"#1c2237"}} fontSize="large"/>
                </ListItemIcon>
                <ListItemText
                  primary="Apple Inc"
                  secondary="500 Stocks" 
                />
				<Button buttonColor='green' onClick={update}>Buy</Button>
				<Button buttonColor='red'>Sell</Button>

              </ListItem>
              <ListItem style={{height:"120px"}}>
                <ListItemIcon>
                  <PhoneIphoneIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Adobe Inc"
                  secondary="200 Stocks"
                />
                <Button buttonColor='green' onClick={update}>Buy</Button>
				<Button buttonColor='red'>Sell</Button>
              </ListItem>
              <ListItem style={{height:"120px"}}>
                <ListItemIcon>
                    <AppleIcon style={{color:"#1c2237"}} fontSize="large"/>
                </ListItemIcon>
                <ListItemText
                  primary="Apple Inc"
                  secondary="500 Stocks" 
                />
                <Button buttonColor='green' onClick={update}>Buy</Button>
				<Button buttonColor='red'>Sell</Button>
              </ListItem>
              <ListItem style={{height:"120px"}}>
                <ListItemIcon>
                  <PhoneIphoneIcon style={{color:"#1c2237"}}/>
                </ListItemIcon>
                <ListItemText
                  primary="Adobe Inc"
                  secondary="200 Stocks"
                />
                <Button buttonColor='green' onClick={update}>Buy</Button>
				<Button buttonColor='red'>Sell</Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <List>
              <ListItem style={{height:"120px"}}>
                    <SingleStockWidget  symbol={"AAPL"}></SingleStockWidget>
              </ListItem>
              <ListItem style={{height:"120px"}}>
              <SingleStockWidget  symbol={"ADBE"}></SingleStockWidget>
              </ListItem>
              <ListItem style={{height:"120px"}}>
                    <SingleStockWidget  symbol={"AAPL"}></SingleStockWidget>
              </ListItem>
              <ListItem style={{height:"120px"}}>
              <SingleStockWidget  symbol={"ADBE"}></SingleStockWidget>
              </ListItem>
            </List>
          </Grid>
        </Grid>
    </div>
    );

}

export default Trades;