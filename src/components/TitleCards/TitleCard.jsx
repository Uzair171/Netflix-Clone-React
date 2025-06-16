import React from 'react'
import cards from '../../assets/cards/Cards_data.js'
import './TitleCard.css'

  
 const renderedCards = cards.map((data, index) => (
  <div className="card" key={index}>
    <img src={data.image} alt="Movie card" />
    <p>{data.name}</p>
  </div>
));

const TitleCard = () => {
  return (
    <div className='title-Cards'>
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {renderedCards}
      </div>
    </div>
  );
};

export default TitleCard;
