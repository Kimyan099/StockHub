import React, { useState, createContext } from 'react';

export const NewsCategoryContext = createContext();

export const NewsCategoryCollection = (props) => {
  const [currentCategory, setCurrentCategory] = useState('allnews');

  return (
    <NewsCategoryContext.Provider value={[currentCategory, setCurrentCategory]}>
      {props.children}
    </NewsCategoryContext.Provider>
  );
};
