import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Order from './Pages/Order';
import Payment from './Pages/Payment';
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import CartProvider from './Components/CartContext';

const router = createBrowserRouter([{ path: "*", Component: Root }]);

const ProtectedRoute = () => {
  return (
    <CartProvider>
        <Outlet/>
    </CartProvider>
  );
};

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <Routes>
      <Route path="*" element={<Dummy title={"Not Found"} />} />
      <Route element={<ProtectedRoute />}>
          <Route path="/Payment" element={<Payment/>} />
          <Route path="/" element={<Login />} />
          <Route path="/Order" element={ <Order />} />
      </Route>
    </Routes>
  );
}

function Dummy({ title }: { title: string }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {title}
    </div>
  );
}
