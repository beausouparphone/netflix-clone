import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../../assets/back.png'
import { useNavigate, useParams } from 'react-router-dom'

export const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        typeof: '',
    });

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGEyZjg0NjQ4NzAyMGU2ZjIxOWU1YmMxZmJhOTcxMCIsIm5iZiI6MTc0MTg5MTA0MC45OSwic3ViIjoiNjdkMzI1ZTAwNWRmM2NkYmRjN2Y0YzNhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.o6i22YX5oVkK3poWb26VyFvLNmFKqq1Uq3maZ2ajnqc'
        }
      };
    
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results[0]))
        .catch(err => console.error(err));
    })

  return (
    <div className='player'>
        <img src={back_arrow} alt="" onClick={() => {navigate(-2)}}/>
        <iframe 
            width='90%' 
            height='90%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            allowFullScreen
        ></iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
        </div>
    </div>
  )
}
