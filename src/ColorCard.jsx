import React from 'react'

function ColorCard(card) {
  return (
    <div className="ColorCard">
      <div className="ColorCard-swatch" style={{ backgroundColor: card.hex }}/>
      <div className="ColorCard-data">
        <p>Pantone</p>
        <p>{card.code}</p>
        <p>{card.name}</p>
      </div>
    </div>
  );
}

export default ColorCard;
