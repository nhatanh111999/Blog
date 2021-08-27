import './App.css';
import Header from './components/Header';
import React from 'react';
import Home from './components/Home';
import Blog from './components/Blog';
import Truyen from './components/Truyen';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <Header/>
      <header/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route  path="/blogs" component={Blog}/>
        <Route  path="/truyen" component={Truyen}/>
        <Route  path="/:something" component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;
