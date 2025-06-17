import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_img from '../../assets/back_arrow_icon.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGQ1NWQyNjY1ODQzZTBmYjc3MTdhMWM4MThhOGJiNiIsIm5iZiI6MTc1MDE0NDk4MS42NDYwMDAxLCJzdWIiOiI2ODUxMTdkNTIwNzUwZTI1ZDBiNmRmNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7RD-euAObMG8Rq6aiDYVjMtIDYqDyQlMbCDw7uQyU44'
  }
};


const Player = () => {

  const {id} = useParams();
  const navigate =useNavigate();

  const [apiData, setApiData] = useState({
    key:'',
    name:'',
    published_at:'',
    type: '',
  })

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));

  },[])

  return (
    <div className='player'>
      <img className='img' src={back_arrow_img} alt="Back Arrow Image" onClick={()=>navigate(-2)} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
       frameborder="0" width='90%' height='90%' title='trailor' allowFullScreen ></iframe>
        <div className='player-info'>
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
