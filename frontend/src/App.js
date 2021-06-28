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
import Heart from './components/Heart'
import Emoji from 'a11y-react-emoji'

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
        <h2><Emoji symbol="🌺" label="flower" /><Emoji symbol="❤️" label="heart" /></h2>
        <h2><Heart /></h2>
      </div>
    );
  }
}

export default App;
