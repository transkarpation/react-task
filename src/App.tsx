import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
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
    <Provider store={store}>
      <div className="container">
        <Router>
          <Navbar />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
