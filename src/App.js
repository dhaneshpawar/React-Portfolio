import React from 'react';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  let title = "i am title...";
  return (
    <BrowserRouter>
        <Route path='/' component={Home}/>
        <Route path='/header' component={Header}/>
        <Route path='/footer' component={Footer}/>
    </BrowserRouter>
  );
}

export default App;