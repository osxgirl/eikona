import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar'
import Home from '../components/Home';
import Matrix from '../components/Matrix.js'
import MessagesContainer from './MessagesContainer';
import MessageCard from '../components/MessageCard';
import {fetchMessages} from '../actions/messageActions';
import GifListContainer from '../containers/GifListContainer'
import Heart from '../components/Heart';
class App extends Component {
     
    
  componentDidMount() {
     console.log(this.props)
     this.props.fetchMessages()
   }
 
  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <MessageCard messageDetails={this.props.messageDetails} />
    }
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
            <div id="clock"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messageDetails: state.messages,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
