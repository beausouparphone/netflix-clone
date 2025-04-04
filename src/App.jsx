import React from 'react'
import { Home } from './components/pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/pages/login/Login'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}