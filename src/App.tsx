import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HandleHint from './components/GetData';
import HomePage from './pages/HomePage';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hint" element={<HandleHint />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
