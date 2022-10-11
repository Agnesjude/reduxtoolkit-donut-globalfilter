import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListting';
import ProductDetails from './containers/ProductDetails';
import Home from './containers/home/index';
import SuppressContent from './containers/suppress/suppressContent';
import SuppressTable from './containers/suppress/supressTable';
import SuppressHome from './containers/suppress/suppressHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<ProductListing/>}/>
          <Route path="/navfilter" element={<ProductDetails/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/suppressHome" element={<SuppressHome/>}/>
          <Route path="/suppressContent" element={<SuppressContent/>}/>
          <Route path="/suppressTable" element={<SuppressTable/>}/>
          <Route>404 Not Found!</Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
