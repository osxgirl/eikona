import React from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux'
import {createMessage} from '../actions/messageActions'
import Emoji from 'a11y-react-emoji'


class MessageForm extends React.Component{

    state = {
        id: uuid(),
        detail: [],
    }

    handleInputChange = (event) => {
        const detail = event.target.detail
        const value = event.target.value

        this.setState({
            [detail]: value
        }, () => console.log(this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault()
       
        const message = {...this.state}
        
        this.props.createMessage(message)
        this.setState({detail: "", id: uuid()})
    }
    updateDetail(event) {
       this.setState({
         detail: event.target.value
       });
     }
    render(){
        return(
           <div>
            <form onSubmit={this.handleSubmit}>
                <label><Emoji symbol="💬" label="messages" />
               <input detail='detail' type="text" placeholder=":)" value={this.state.detail}  onChange={this.updateDetail.bind(this)} />
               </label>
               <input type="submit" value="Add Message" />
            </form>
          </div>
        )
    }
}

export default connect(null, {createMessage})(MessageForm)
