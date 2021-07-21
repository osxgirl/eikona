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
import Heart from "react-animated-buttons"
import Counter from './components/Counter'
import AnimatedButton from 'react-animated-buttons';


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
          <Route exact path="/counter" component={Counter} />
          </React.Fragment>
        </Router>

            <div style={{margin: '0rem 0.2rem', display: 'inline-block'}}>
                <AnimatedButton buttonStyle={{padding: '0.5rem'}} color="#f1f2f6" buttonRadius="10%">❤️</AnimatedButton>
            </div>

      </div>
    );
  }
}

export default App;
