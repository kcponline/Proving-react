import React, {Component} from 'react';
import logo from './logo.svg';
import {Route, Router, browserHistory} from 'react-router';
import Home from './containers/home';
import Giphy from './containers/giphy';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
         <Route path='/' component={Home} />
         <Route path='/giphy' component={Giphy} />
         <Route path='/navbar' component={Navbar} />            
      </Router>
    );
  }
}

export default App;
