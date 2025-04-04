import React, { useEffect } from 'react'
import { Home } from './components/pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/pages/login/Login'
import { Player } from './components/pages/player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

export const App = () => {

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('Logged In');
      } else {
        console.log('Logged Out');
      }
    })
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}