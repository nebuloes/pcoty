import React, { PureComponent } from 'react'

class ColorCard extends PureComponent {
  render() {
    const { card, onChangeColor } = this.props;
    return (
      <div className="ColorCard">
        <div className="ColorCard-swatch" style={{ backgroundColor: card.hex }} onClick={() => onChangeColor(card.hex)}/>
        <div className="ColorCard-data">
          <p>Pantone</p>
          <p>{card.code}</p>
          <p>{card.name}</p>
        </div>
      </div>
    );
  }
}

export default ColorCard;
