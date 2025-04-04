import React from 'react'
import './Home.css'
import { Navbar } from '../../navbar/Navbar'
import banner_image from '../../../assets/banner-1.jpg'
import banner_title from '../../../assets/arcane-logo.png'

export const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="banner">
            <img src={banner_image} alt="" className='banner-img'/>
            <div className="banner-caption">
                <img src={banner_title} alt="" className='caption-img'/>
                <p>The origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.</p>
            </div>
        </div>
    </div>
  )
}
