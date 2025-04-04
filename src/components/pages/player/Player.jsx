import React from 'react'
import './Player.css'
import back_arrow from '../../../assets/back.png'

export const Player = () => {
  return (
    <div className='player'>
        <img src={back_arrow} alt="" />
        <iframe 
            width='90%' 
            height='90%'
            src='https://www.youtube.com/embed/oJUz-s5PhsU'
            title='trailer'
            allowFullScreen
        ></iframe>
        <div className="player info">
            <p>Published Date</p>
            <p>Name</p>
            <p>Type</p>
        </div>
    </div>
  )
}
