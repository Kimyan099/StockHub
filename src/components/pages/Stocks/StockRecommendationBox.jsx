import React, { useState, useContext, useEffect } from 'react';
import './Stock.css';
import StockBuySell from './StockBuySell';
import StockRecommendation from './StockRecommendation';


function StockRecommendationBox() {
    return (
        <div className='stock-recommendation-container-wrap'>
            <StockRecommendation />
            <StockBuySell />
        </div>
    )
}

export default StockRecommendationBox
