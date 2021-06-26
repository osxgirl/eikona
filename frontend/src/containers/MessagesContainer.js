import MessageCard from '../components/MessageCard'
import React from 'react'
import MessageForm from '../components/MessageForm'
import {connect} from 'react-redux'
import {fetchMessages}  from '../actions/messageActions'


class MessagesContainer extends React.Component{
    
    addMessage = (messageData) => {
       this.setState((prevState, prevProps ) => {
            return {
                messages: [...prevState.messages, messageData]
            }
        })
    }
    makeMessageCards(){
        return this.props.messages.map(message => <MessageCard message={message} />)
    }

    componentDidMount(){
      console.log("A")
      this.props.fetchMessages()
      console.log("D")
    }

    render(){
        return(
            <div id="message-container">
                <div>
                 <MessageForm addMessage={this.addMessage}/>
                <br></br>
                </div>
               {this.props.loading ? <h1>LOADING....</h1> : this.makeMessageCards()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
        messages: state.messages
        })
               
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
