import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Header from './components/header/header';
import Footer from './components/footer/footer.jsx';
import Home from './pages/homepage/home.jsx'
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>

      <Header />
      <Home />
      <Footer />

    </div>
  )
}

export default App
