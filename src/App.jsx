import React from 'react'
import './App.scss'
import ColorCard from './ColorCard';
import * as data from './colors';

function App() {
  const cards = data.default;

  return (
    <div className="App">
      <header className="App-header"/>
      <div className="App-body">
        {cards.map((card, index) => <ColorCard {...card} key={index}/>)}
      </div>
    </div>
  )
}

export default App;
