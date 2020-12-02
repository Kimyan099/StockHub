import React, { useState, createContext } from 'react';

export const NewsOrderContext = createContext();

export const NewsOrderCollection = (props) => {
  const [currentOrderType, setCurrentOrderType] = useState('desc');

  return (
    <NewsOrderContext.Provider value={[currentOrderType, setCurrentOrderType]}>
      {props.children}
    </NewsOrderContext.Provider>
  );
};
