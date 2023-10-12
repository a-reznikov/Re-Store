import React from "react";
import { Routes, Route } from 'react-router-dom';

import './app.css';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => {

  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart/' element={<CartPage />} />
      </Routes>
    </main>
  )
}

export default App;