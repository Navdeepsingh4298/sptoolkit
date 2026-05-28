import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from "./pages/Contact/ContactPage"
import NotFoundPage from './pages/NotFound/NotFoundPage';

//components
import Header from "./components/header/Header.component"
import AppBar from "./components/appbar/DrawerAppBar"


function App() {
      return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
