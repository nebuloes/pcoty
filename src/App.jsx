import React, { PureComponent } from 'react'
import './App.scss'
import ColorCard from './ColorCard';
import cards from './colors';

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
    return (
      <div className="App">
        <div className="App-body" style={{ backgroundColor: this.state.background }}>
          <div className="App-inner">
            {cards.map((card, index) => <ColorCard key={index} card={card} onChangeColor={(color) => this.changeColor(color)}/>)}
            <div className="App-brand headline">Pantone</div>
            <div className="App-accent headline">Color of the Year</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
