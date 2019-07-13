import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import Communities  from './pages/Communities';
import  Error  from './pages/Error';
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/communities" component={Communities}/>
      
      <Route component={Error} />
    </Switch>
    <Footer/>
    
    </>
  );
}


export default App;
