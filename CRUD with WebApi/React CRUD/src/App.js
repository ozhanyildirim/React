import React, { Component , useState} from 'react'
import {Button} from 'react-bootstrap'
import './App.css';
import { Department } from './components/Department';
import { Employee } from './components/Employee';
import {HomeScreen} from './components/HomeScreen';
import {Navigation} from './components/Navigation';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


 function App ()  {

  
  
    return (
      
      <Router> 
      
      <Navigation/>
      <h3 className="m-3 d-flex justify-content-center">
          REACT JS 
        </h3>
        <h5 className="m-3 d-flex justify-content-center">
          CRUD 
        </h5>
     <Switch>
      <Route path="/" component={HomeScreen} exact strict />
      <Route path="/department" component={Department} exact strict/>
      <Route path="/employee" component={Employee} exact strict/>

     </Switch>
      </Router>
    )
  
}


export default App;
