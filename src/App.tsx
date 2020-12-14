import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import IndexPage from './pages/IndexPage'
import SearchResult from './pages/SearchResultPage'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>
            <Route path="/search-result">
              <SearchResult />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
