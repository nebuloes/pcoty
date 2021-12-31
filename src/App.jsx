import React, { PureComponent } from 'react'
import './App.scss'
import ColorCard from './ColorCard';
import * as data from './colors';

class App extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      background: '#fff',
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    this.setState({ background: color });
  }


  render() {
    const cards = data.default;
    return (
      <div className="App">
        <header className="App-header"/>
        <div className="App-body" style={{ backgroundColor: this.state.background }}>
          {cards.map((card, index) => <ColorCard key={index} card={card} onChangeColor={(color) => this.changeColor(color)}/>)}
          <div className="App-accent">Pantone</div>
        </div>
      </div>
    )
  }
}

export default App;
