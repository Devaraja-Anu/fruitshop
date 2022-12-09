import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Faq from './Faq';
import Home from './Home'
import Login from './Login';
import Products from './Products';
import Signup from './SIgnup';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App