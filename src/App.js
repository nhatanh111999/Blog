import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Truyen from './pages/Truyen';
import ModalLoginProvider from './contexts/ModalLoginProvider'
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
 
  return (
    <Router>
        <ModalLoginProvider>
          <Navbar/>
        </ModalLoginProvider>
        <Switch >
          <Route exact path="/home" component={Home}/>  
          <Route  path="/home" component={Home}/>
          <Route  path="/blogs"  component={Blog}/>
          <Route  path="/truyen" component={Truyen}/>
          <Route  path="/Blog" component={Home}/>
          <Route  path="*" component={ErrorPage}/>
        </Switch>
    </Router>
  );
}

export default App;
