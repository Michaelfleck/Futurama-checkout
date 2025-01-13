import { useState } from 'react'

import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navbar } from './components/navbar'
import Shop from './pages/shop/shop'
import {Cart} from './pages/cart/cart'

function App() {
  return (
    <>
      <div className="App">
          <Router>
            <Navbar />
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />}/>
              </Routes>
          </Router>
      </div>
    </>
  );
}

export default App;
