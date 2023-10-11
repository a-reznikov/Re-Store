import React from "react";
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

import './app.css'
import { HomePage, CartPage } from '../pages'

const App = () => {

  return (
    <div className="app">App
      <Link to='/'>Home</Link>
      <Link to='/cart/'>Cart</Link>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart/' element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App;