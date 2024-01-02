import React , { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { ApiProvider } from './context/ApiContext';
import Home from "./components/Home";

import './App.css';
import AddBook from './components/AddBook';

function App() {

  useEffect(() => {
    // Mettez à jour le titre du document
    document.title = "BooksMeanApp";
  }, []);

  return (
    <Router>
      <ApiProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/add' element={<AddBook />} />
        </Routes>
      </ApiProvider>
    </Router>
  );
}

export default App;
