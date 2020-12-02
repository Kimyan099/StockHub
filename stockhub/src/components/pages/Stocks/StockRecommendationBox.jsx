import React, { useState, useContext, useEffect } from 'react';
import './Stock.css';
import StockBuy from './StockBuy';
import StockRecommendation from './StockRecommendation';


function StockRecommendationBox() {
    return (
        <div className='stock-recommendation-container-wrap'>
            <StockRecommendation />
            <StockBuy />
        </div>
    )
}

export default StockRecommendationBox
