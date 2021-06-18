import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home';
//import learnSymbol from '../components/data.js'
import Matrix from '../components/Matrix.js'



import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
          <Router>
          <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/drawing" component={Matrix} />
          <Route exact path="/giphy" component={GifListContainer} />
          </React.Fragment>
        </Router>
    </div>
  )
}

export default App
