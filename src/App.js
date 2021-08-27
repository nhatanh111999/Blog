import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import Truyen from './components/Truyen';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <Navbar/>
      <div className="mg-top">
      <Switch >
        <Route exact path="/" component={Home}/>  
        <Route exact path="/home" component={Home}/>
        <Route  path="/blogs" component={Blog}/>
        <Route  path="/truyen" component={Truyen}/>
        <Route  path="/:something" component={ErrorPage}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
