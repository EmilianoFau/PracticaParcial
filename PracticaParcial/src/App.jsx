import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Details from './components/Details/details';
import { GamesProvider } from './contexts/games';

function App() {
  return (
    <GamesProvider>
      <Router>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Details />} />
        </Routes>
      </Router>
    </GamesProvider>
  )
}

export default App
