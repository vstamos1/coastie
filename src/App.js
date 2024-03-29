import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import Communities  from './pages/Communities';
import  Error  from './pages/Error';
import Footer from './components/Footer';
import  Header1  from './components/Header/Header1'

import CommunityDetail from './pages/CommunityDetail';





function App(...rest) {
  return (
    <>
    <div class="nav-header"><div class="nav-brand">Coastie us</div></div>
    <Header1 />
    <Switch>
      <Route exact path="/" component={Home}/> 
      <Route exact path='/communities/:id' component={CommunityDetail}/>
      <Route exact path="/communities" component={Communities}/>
      
      <Route component={Error} />
    </Switch>
    <Footer/>
    
    </>
  );
}


export default App;
