import React from 'react';
import Items from '../components/Items';
import Navbar from '../components/Navbar';
import Cart from './cart';
import { CartProvider } from 'react-use-cart';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <CartProvider>
        <Routes>
          <Route path='/' element={<Items />} exact />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
