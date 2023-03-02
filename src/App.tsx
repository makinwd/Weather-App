import React, { FC } from 'react';
import { Search } from './components/Seacrh/Search';
import './App.scss';

const App: FC = () => {
  return (
    <div className="container">
      <Search />
      <h1>Weather App</h1>
      <h3>Under construction</h3>
    </div>
  );
};

export default App;
