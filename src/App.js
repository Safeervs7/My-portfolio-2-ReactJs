import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

import './App.css';

import SwithRouter from './utilities/switchRouter'

function App() {
  return (
          <Router>
              <SwithRouter/>
          </Router>
  );
}

export default App;
