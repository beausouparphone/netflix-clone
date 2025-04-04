import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell.png'
import login_img from '../../assets/login.png'
import dropdown from '../../assets/dropdown.png'

const categories = [
    'Home',
    'TV Shows',
    'Movies',
    'New & Popular',
    'My List',
    'Browse by Languages'
]

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                {categories.map((categoryName) => (
                    <li>
                        {categoryName}
                    </li>
                ))}
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons'/>
            <p>family</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src={login_img} alt="" className='profile'/>
                <img src={dropdown} alt="" className='dropdown'/>
            </div>
        </div>         
    </div>
  )
}
