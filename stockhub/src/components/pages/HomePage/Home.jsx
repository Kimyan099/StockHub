import React, {useEffect} from 'react';
import HeroSection from './HeroSection';
import { homeObjOne } from './Data';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;

