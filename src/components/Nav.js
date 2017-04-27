import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Gear from './Gear';
import Home from './Home';

const Nav = () => (
    <div>
      <Router>
        <div className='navBar'>
          <Route exact path="/" component={Home}/>
            <hr/>
            <li className='navList'>
              <ul><Link to="/">Home</Link></ul>
              <ul><Link to="/gear">Gear</Link></ul>
            </li>
          <Route path="/gear" component={Gear}/>
        </div>
      </Router>
    </div>
)

module.exports = Nav;
