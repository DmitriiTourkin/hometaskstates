import React from "react";

function CardsView(props) {
  return (
    <div className="cards-view">
      {props.cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.name} />
          <h3>{card.name}</h3>
          <p>{card.description}</p>
          <span>{card.price}</span>
        </div>
      ))}
    </div>
  );
}

export default CardsView;
