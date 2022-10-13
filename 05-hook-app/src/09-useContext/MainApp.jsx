import React from 'react';
import { Routes,Route, Navigate, Link } from "react-router-dom";
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
    <h1>Main App</h1>
    
    <Navbar />
    <hr />

    {/*<Link to="/">Home</Link>
    <Link to="/login">Login</Link>
  <Link to="/about">About</Link>*/}

    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/login/" element={ <LoginPage /> } />
      <Route path="/about/" element={ <AboutPage /> } />

      {/*<Route path="/*" element={ <LoginPage /> } /> */}
      <Route path="/*" element={ <Navigate to="/about" /> } />
    </Routes>
    </ UserProvider>
  )
}
