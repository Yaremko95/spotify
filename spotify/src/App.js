import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Search from './components/Search'
import Playlist from './components/Playlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import Artist from './components/Artist';
import Login from './components/Login';
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path= {'/search'} component={Search}/>
          <Route path='/artist/:id' component={Artist}/>
          <Route path='/playlist/:id'component={Playlist}/>
          <Route exact path='/' component={Login}/>
          <Route path="/home" component={Homepage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
