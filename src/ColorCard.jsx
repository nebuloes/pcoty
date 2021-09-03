import React from 'react'

function ColorCard(card) {
  return (
    <div className="ColorCard" style={{ backgroundColor: card.hex }}>
      {card.name}
    </div>
  );
}

export default ColorCard;
