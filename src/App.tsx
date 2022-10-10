import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListting';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing/>}/>
          <Route path="/navfilter" element={<ProductDetails/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
