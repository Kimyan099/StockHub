import React,  {useState, createContext} from 'react'

export const StockContext = createContext();

export const StockData = props => {
    const [stock, changeStock] = useState('aapl')
    return (
        <StockContext.Provider value={[stock, changeStock]}>
            {props.children}
        </StockContext.Provider>
    )
}
