import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SearchContainer from './SearchContainer';
import { useSelector } from 'react-redux';

function Browse() {
  const gptInfo = useSelector(store => store.gpt);
  return (
    <div >
      <Header/>
    {gptInfo.showGPT === true ?<SearchContainer/>:<MainContainer/>}
      
    </div>
  )
}

export default Browse