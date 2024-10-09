import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/home';
import { GamesProvider } from './contexts/games';

function App() {
  return (
    <GamesProvider>
      <Router>
        <nav>
          <Link to="/"></Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </GamesProvider>
  )
}

export default App
