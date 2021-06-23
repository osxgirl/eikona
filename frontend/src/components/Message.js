import React from 'react'

class Message extends React.Component {

    state = {
        message: "message1"
    }

   
    switchMessage = () => {
        
       this.setState((prevState) => {
           const newMessage = prevState.message === "message1" ? "message2" : "message3"
           return(
            {
                image: newMessage
            })
        }, () => console.log(this.state))
    }

    render(){
        return (
            <div className="message" id={this.props.id + "message"}>
                <h3>{this.props.id}</h3>
                <div onMouseEnter={this.switchMessage} onMouseLeave={this.switchMessage}>
                </div>
            </div>
        )
    }
}

export default Message
