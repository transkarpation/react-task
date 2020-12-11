import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="container">
      <h1 className="text-muted">App</h1>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
