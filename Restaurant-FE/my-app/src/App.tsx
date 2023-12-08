import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Order from './Pages/Order';
import Payment from './Pages/Payment';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/" element={<Login />} />
          <Route path="/Order" element={ <Order />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
