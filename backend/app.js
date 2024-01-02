// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './src/components/home';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Home} />
        {/* Ajoutez d'autres routes au besoin */}
      </div>
    </Router>
  );
};

export default App;