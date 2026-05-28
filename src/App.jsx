import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from "./pages/Contact/ContactPage"
import NotFoundPage from './pages/NotFound/NotFoundPage';
import ScriptLibrary from './pages/scriptLib/ScriptLibrary';
import SnippetPage from './pages/snippet/SnippetPage';
import ToolsPage from './pages/Tools/ToolsPage';


function App() {
      return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scripts" element={<ScriptLibrary />} />
          <Route path="/scripts/:snippetId" element={<SnippetPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
