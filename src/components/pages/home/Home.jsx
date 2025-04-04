import React from 'react'
import './Home.css'
import { Navbar } from '../../navbar/Navbar'
import banner_image from '../../../assets/banner-1.jpg'
import banner_title from '../../../assets/arcane-logo.png'
import play_icon from '../../../assets/play.png'
import info_icon from '../../../assets/info.png'
import { TitleCard } from '../../titlecards/TitleCards'

export const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="banner">
            <img src={banner_image} alt="" className='banner-img'/>
            <div className="banner-caption">
                <img src={banner_title} alt="" className='caption-img'/>
                <p>The origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.</p>
                <div className="banner-btns">
                    <button className='btn'><img src={play_icon} alt="" />Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="" />Info</button>
                </div>
                <TitleCard />
            </div>
        </div>
        <div className="more-cards">
          <TitleCard title={'Blockbuster Movies'} category={'now_playing'}/>
          <TitleCard title={'Upcoming'} category={'upcoming'}/>
          <TitleCard title={'For You'} category={'top_rated'}/>
        </div>
    </div>
  )
}
