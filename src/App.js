import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './styles/App.css';
import Listen from './components/Listen.js';
import Watch from './components/Watch.js';
import Nav from './components/Nav.js';
import Gear from './components/Gear.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box">
          <Nav />
        </div>
        <div className="parallax1">

        </div>
        <div className="box">
          <Listen className='info-box'/>
        </div>
        <div className="parallax2" />
        <div className="box">
          <Watch className='info-box'/>
        </div>
        <div className="parallax3" />
        <div className="box">
          <p> contact me! </p>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <textarea>
            Hello there, this is some text in a text area
          </textarea>
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
        <div className="parallax4" />

      </div>
    );
  }
}

export default App;
