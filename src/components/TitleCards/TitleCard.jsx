import { useRef, useEffect, useState } from 'react';
import './TitleCard.css';
import { Link } from 'react-router-dom';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGQ1NWQyNjY1ODQzZTBmYjc3MTdhMWM4MThhOGJiNiIsIm5iZiI6MTc1MDE0NDk4MS42NDYwMDAxLCJzdWIiOiI2ODUxMTdkNTIwNzUwZTI1ZDBiNmRmNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7RD-euAObMG8Rq6aiDYVjMtIDYqDyQlMbCDw7uQyU44'
  }
};

const TitleCard = ({ title = "Popular on Netflix", category = "popular" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        const nonAdultMovies = res.results.filter(movie => movie.adult === false);
        setApiData(nonAdultMovies);
      })
      .catch(err => console.error(err));

    const el = cardsRef.current;
    if (el) el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [category]);

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  const renderedCards = apiData.map((card, index) => (
    <Link to={`/player/${card.id}`} className="card" key={index}>
      <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} alt="Movie card" />
      <p>{card.original_title}</p>
    </Link>
  ));

  return (
    <div className="title-Cards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {renderedCards}
      </div>
    </div>
  );
};

export default TitleCard;
