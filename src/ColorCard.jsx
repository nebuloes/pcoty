import React from 'react'

function ColorCard(card) {
  return (
    <div className="ColorCard">
      <div className="ColorCard-swatch" style={{ backgroundColor: card.hex }}/>
      <span>Pantone</span>
      {card.name}
    </div>
  );
}

export default ColorCard;
