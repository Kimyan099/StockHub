import {
  Typography,
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
} from "@material-ui/core";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Register/UserContext";
import SingleStockWidget from "../../../../ui/SingleStockWidget";
import { StockContext } from "../../../Stocks/StockContext";
import axios from "axios";
import { Button } from "../../../../ui/Button";

const Trades = (props) => {
  let profilePicture =
    "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190423100153-01-charlie-the-otter-file.jpg";
  const [
    name,
    setName,
    isLoggedIn,
    setIsLoggedIn,
    contextEmail,
    setContextEmail,
  ] = useContext(UserContext);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [stock, setStock, stockList, setStockList] = useContext(StockContext);
  const [symbol, setSymbol] = useState("");
  const [stockName, setStockName] = useState("");
  const [bought, setBought] = useState(0);
  const [stockImageLink, setStockImageLink] = useState("");

  const buyStock = (stock) => {
    axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=bu21m3v48v6u9tetnbig`
      )
      .then((res) => {
        setCurrentPrice(res.data.c);
        setStockName(stock.name);
        setSymbol(stock.symbol);
        setBought(bought + 1);
      });
  };

  useEffect(() => {
    if (currentPrice != 0) {
      axios
        .post(`http://localhost:8762/auth/buy`, {
          price: currentPrice,
          symbol: stock,
          name: stockName,
          imageLink: stockImageLink,
        })

        .then((response) => {
          axios
            .get(`http://localhost:8762/auth/client/active`, {withCredentials: true})
            .then((res) => setStockList(res.data));
        });
    } else {
      axios
        .get(`http://localhost:8762/auth/client/active`, {withCredentials: true})
        .then((res) => setStockList(res.data));
    }
  }, [bought]);

  const getStockImage = (stock) => {
    axios
      .get(
        `https://finnhub.io/api/v1//stock/profile2?symbol=${stock.symbol}&token=bu21m3v48v6u9tetnbig`
      )
      .then((res) => {
        if (res.data.logo) {
          setStockImageLink(res.data.logo);
        } else {
          setStockImageLink(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
          );
        }

        buyStock(stock);
      });
  };



  const createListItems = (stock) => {
    return (
      <ListItem key={stock.id} style={{ height: "120px" }}>
        <ListItemIcon>
          <img src={stock.imageLink} alt=""></img>
        </ListItemIcon>
        <ListItemText primary={stock.name} secondary={100} />
        <Button
          buttonColor="green"
          onClick={() => {
            getStockImage(stock);
          }}
        >
          Buy
        </Button>
        <Button buttonColor="red">Sell</Button>
      </ListItem>
    );
  };

  const createStockWidgets = (stock) => {
    return (
      <ListItem style={{ height: "120px" }}>
        <SingleStockWidget symbol={stock.symbol}></SingleStockWidget>
      </ListItem>
    );
  };

  return (
    <div className="User">
      <Divider />
      <Typography variant="h5" component="h2" style={{ margin: "20px" }}>
        Owned Stocks
      </Typography>
      <Divider style={{ margin: "0 20px" }} />
      <Grid container spacing={2}>
        <Grid item xs>
          <List>{stockList.map((stock) => createListItems(stock))}</List>
        </Grid>
        <Grid item xs>
          <List>{stockList.map((stock) => createStockWidgets(stock))}</List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Trades;
