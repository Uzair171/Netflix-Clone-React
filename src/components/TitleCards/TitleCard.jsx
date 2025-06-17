import {useRef,useEffect} from 'react'
import cards from '../../assets/cards/Cards_data.js'
import './TitleCard.css'

  
 const renderedCards = cards.map((data, index) => (
  <div className="card" key={index}>
    <img src={data.image} alt="Movie card" />
    <p>{data.name}</p>
  </div>
));



const TitleCard = (props) => {
  
   const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault(); 
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const el = cardsRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false }); 
    }

  }, [])
  return (
    <div className='title-Cards'>
      <h2>{props.title ? props.title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {renderedCards}
      </div>
    </div>
  );
};

export default TitleCard;
