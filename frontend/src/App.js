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


class App extends Component {
    state = {
       search: ""
     }

     handleInputChange = (e) => {
       const search = e.target.value
       this.setState({search: search})
     }


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
        <h2><Heart /></h2>
      </div>
    );
  }
}

export default App;
