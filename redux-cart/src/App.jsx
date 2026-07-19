import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cart from './components/Cart'
import Theme from './components/Theme'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  const dark = useSelector((state) => state.theme.dark);

  return (
    <div className={dark ? "dark" : ""}>
      <h1>Redux Demo</h1>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/theme' element={<Theme />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </div>
  )
}

export default App

/**
 * WHY react router?
 * How to use it?
 *  BrowserRouter -> Routs
 * 
 * URL Parameter --> xyz.com/user/max123
 * 
 * Query Parameter --> xyz.com/list?name=max&age=25
 * Key = value , & is a seperator 
 * 
 */
