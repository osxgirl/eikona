import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Matrix from './components/Matrix.js'
import MessagesContainer from './containers/MessagesContainer'
import GifListContainer from './containers/GifListContainer'
import Heart from "react-heart"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={MessagesContainer} />
          <Route exact path="/drawing" component={Matrix} />
          <Route exact path="/giphy" component={GifListContainer} />
          <Route exact path="/heart" component={Heart} />
          </React.Fragment>
        </Router>

        <p><Heart /></p>
      </div>
    );
  }
}

export default App;
