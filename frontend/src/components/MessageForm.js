import React from 'react'
import uuid from 'uuid';
import {connect} from 'react-redux'
import {createMessage} from '../actions/messageActions'
import Emoji from 'a11y-react-emoji'


class MessageForm extends React.Component{

    state = {
        detail: "",
        id: uuid()
    }

    handleOnChange = (e) => {
        const detail = e.target.detail
        const value = e.target.value

        this.setState({
            [detail]: value
        }, () => console.log(this.state))
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
       
        const message = {...this.state}
        
        this.props.createMessage(message)
        this.setState({detail: "", id: uuid()})
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label><Emoji symbol="💬" label="messages" />
                   <input value={this.state.detail} name='detail' onChange={this.handleOnChange} />
               </label>
               <input type="submit" value="Add Message" />
            </form>
        )
    }
}

export default connect(null, {createMessage})(MessageForm)
