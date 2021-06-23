import MessageCard from '../components/MessageCard'
import React from 'react'
import MessageForm from '../components/MessageForm'
import {connect} from 'react-redux'
import {fetchMessages}  from '../actions/messageActions'


const url ="http://localhost:3000/messages"

class MessagesContainer extends React.Component{
   
    

    addMessage = (messageData) => {
        this.setState((prevState, prevProps ) => {
            return {
                message: [...prevState.messages, messageData]
            }
        })
    }

    makeMessagesLists(){

        return this.props.message.map(message => <MessageCard increaseMessagess={this.increaseMessages} message={message} />)
    }

    increaseMessages = (id) => {
        const message = this.state.mewssages.find((t)=> id === t.id)
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify({likes: message.details + 1})
        }

        fetch(`${url}/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            this.setState((prevState) => {
                 const idx = prevState.messages.findIndex((t)=> json.id === t.id)

                return {
                    messages: [...prevState.messages.slice(0,idx), json, ...prevState.messages.slice(idx + 1)]
                }
            })
        })
      
    }

    componentDidMount(){
     
      console.log("A")
      this.props.fetchMessges()
      console.log("D")
    }

   


    render(){
        return(
            <div id="message-container">
        
                <div>
                    <MessageForm addMessage={this.addMessage}/>
                    <br></br>
                </div>
                
               {this.props.loading ? <h1>LOADING....</h1> : this.makeMessagesCards()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

     const displayMessages = state.messages.filter((message) =>
        message.detail.toLowerCase().includes(ownProps.searchTerm.toLowerCase()))
        
    return {
      messages: displayMessages,
      loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: () => dispatch(fetchMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
