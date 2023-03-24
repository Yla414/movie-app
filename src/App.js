import React from 'react';
import './App.css';
import './animate.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './components/homepage/Homepage';

const App = () => {
  return (
    <div className='flickbase'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
