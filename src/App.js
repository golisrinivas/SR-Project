import {Component} from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from "./components/Footer";

import Navbar from './components/Navbar'

import Home from './components/Home';

import AboutUs from './components/About Us';

class App extends Component{
  render(){
    return(
      <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/about" element = {<AboutUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
      
    )
  }
}

export default App;