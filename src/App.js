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
     
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blogs" component={Blog}/>
        <Route exact path="/truyen" component={Truyen}/>
        <Route exact path="/:something" component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;
