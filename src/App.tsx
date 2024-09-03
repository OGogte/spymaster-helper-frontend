import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetData from './components/GetData';
import HomePage from './pages/HomePage';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/hint" element={<GetData />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
