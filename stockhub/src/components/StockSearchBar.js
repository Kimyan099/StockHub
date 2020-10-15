import React, {useState, useContext} from 'react';
import {StockContext} from './StockContext'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CompaniesContext } from './pages/companies/GetCompanies';
import {Button} from './ui/Button';
import styled from 'styled-components';

const StockSearchBar = () => {

   const WrapperDiv = styled.div`
    
    background-color: white;
    border-radius: 10px;
    height: 50px;
    width: 300px;
    margin-top: 15px;
    align-items: center;
    text-align: center;
   `

  const [companies] = useContext(CompaniesContext);


    const [stock, changeStockSymbol] = useState('')

    const [contextStock, changeContextStock] = useContext(StockContext)

    const changeSymbol = (value) =>{
        console.log(value)
        changeStockSymbol(value.symbol  )
        //console.log(stock)
    }

    const updateSymbol = (e) =>{
        e.preventDefault();
        changeContextStock(stock)
    }

    return (
        <form onSubmit={updateSymbol} style={{display: 'inline-block'}}>
            
            <WrapperDiv>
                <div style={{width: '200px', display: 'inline-block'}}>
               <Autocomplete
            onChange={(event, value) => changeSymbol(value)}
            id="combo-box-demo"
            options={companies}
            size={'small'}
            getOptionLabel={(option) => option.description}
            style={{ width: 200}}
            renderInput={(params) => <TextField 
                label="Search company"
                 {...params}  />}
                 /> 
                 </div>
            </WrapperDiv>
            
        <br/>
        <Button buttonColor='red'>Search</Button>
        </form>
    )

}

export default StockSearchBar
