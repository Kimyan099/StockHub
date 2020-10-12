import React, {useState, useContext} from 'react';
import {StockContext} from './StockContext'

const StockSearchBar = () => {
    
    const [stock, changeStockSymbol] = useState('')

    const [contextStock, changeContextStock] = useContext(StockContext)

    const changeSymbol = (e) =>{
        changeStockSymbol(e.target.value)
        console.log(stock)
    }

    const updateSymbol = (e) =>{
        e.preventDefault();
        changeContextStock(stock)
    }

    return (
        <form onSubmit={updateSymbol}>
            <input type='text' name='symbol' value={stock} onChange={changeSymbol}></input>
            <button>Search</button>
        </form>
    )

}

export default StockSearchBar
