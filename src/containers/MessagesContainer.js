import MessageCard from '../components/MessageCard'
import React from 'react'
import MessageForm from '../components/MessageForm'


const url ="https://ekona.herokuapp.com/messages"

class MessagesContainer extends React.Component{
   
    state = {
        messages: [],
        search: ""
    }

    addMessage = (messageData) => {
        this.setState((prevState, prevProps ) => {
            return {
                messages: [...prevState.messages, messageData]
            }
        })
    }


    makeMessageCards(){
        let displayedMessages = this.state.messages
        console.log(this.state.search)
       
        return displayedMessages.map(message => <MessageCard message={message} />)
       
    }

    componentDidMount(){
      
      fetch(url)
      .then(res => res.json())
      .then(json => {
          console.log(json)
         
         this.setState({
             messages: json
         })
      })
    }

    handleInputChange = (e) => {
        const search = e.target.value
        this.setState({search: search})
    }


    render(){
        return(
            <div id="message-container">
        
                <div>
                    <MessageForm addMessage={this.addMessage}/>
                    <br></br>
                </div>
                
               {this.makeMessageCards()}
            </div>
        )
    }
}

export default MessagesContainer
