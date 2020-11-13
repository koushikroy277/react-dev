import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Web from './components/FileJS/Web';
import About from './components/FileJS/About';
import Contact from './components/FileJS/Contact';
import Service from './components/FileJS/Service';
import 'aos/dist/aos.css';


export default function App() {
  return (
    <>

        <Switch>
          <Route  exact path='/'component={Web}/>
          <Route  exact path='/about' component={About}/>
          <Route  exact path='/contact' component={Contact}/>
          <Route  exact path='/service' component={Service}/>
          <Redirect to="/"/>
        </Switch>

    </>
  )
}


