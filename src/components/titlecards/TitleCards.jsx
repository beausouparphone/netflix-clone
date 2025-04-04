import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import {cards_data} from '../../assets/cards/cardsData'
import { Link } from 'react-router-dom';

export const TitleCard = ({title, category}) => {
  
  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGEyZjg0NjQ4NzAyMGU2ZjIxOWU1YmMxZmJhOTcxMCIsIm5iZiI6MTc0MTg5MTA0MC45OSwic3ViIjoiNjdkMzI1ZTAwNWRmM2NkYmRjN2Y0YzNhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.o6i22YX5oVkK3poWb26VyFvLNmFKqq1Uq3maZ2ajnqc'
    }
  };

  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(respose=> respose.json())
    .then(respose => setApiData(respose.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Beauflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`./player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>            
          )
        })}
      </div>
    </div>
  )
}
