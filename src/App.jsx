import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from "./Components/NavBar/NavBar";
import Home from './Components/Home/Home';
import SingleProduct from "./Components/Pages/SingleProduct";
import Cart from "./Components/Pages/Cart";
import Checkout from "./Components/Pages/Checkout";
import Login from './Components/Pages/Login/Login';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import Signup from './Components/Pages/Signup/SignUP';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/contactus" element={<ContactPage />} />
          </Routes>
        </div>
    </Provider>
  );
}

export default App;
