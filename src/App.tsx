import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';
import {SearchContext} from 'src/contexts/context';

export const App = () => {
  const[search, setSearch] = useState('');

  return (
    <>
    <SearchContext.Provider value={{search, setSearch}}> 
      <Header></Header>
      <Map/> 
    </SearchContext.Provider>
    </>
  );
};