// routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './AuthPage';
import Dashboard from './Dashboard';
import SpecialOffer from './SpecialOffer';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
      </Routes>
    </Router>
  );
};

export default Routing;
