import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell.png'
import login_img from '../../assets/login.png'
import dropdown from '../../assets/dropdown.png'
import { logout } from '../../firebase'

const categories = [
    'Home',
    'TV Shows',
    'Movies',
    'New & Popular',
    'My List',
    'Browse by Languages'
]

export const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 80) {
            navRef.current.classList.add('nav-dark')
        } else {
            navRef.current.classList.remove('nav-dark')
        }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
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
                <img src={dropdown} alt="" className='dropdown-btn'/>
                <div className="dropdown">
                    <p onClick={() => {logout()}}>Sign Out</p>
                </div>
            </div>
        </div>         
    </div>
  )
}
