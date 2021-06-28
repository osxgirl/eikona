import React from 'react'
import {connect} from 'react-redux'
import {createMessage} from '../actions/messageActions'
import Emoji from 'a11y-react-emoji'


class MessageForm extends React.Component{

    state = {
        detail: ""
    }

    handleValueChange = (e) => {
        const detail = e.target.detail
        const value = e.target.value

        this.setState({
            [detail]: value
        }, () => console.log(this.state))
    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        const message = {...this.state}
        
        this.props.createMessage(message)
        this.setState({
          detail: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                   <Emoji symbol="💬" label="messages" />
                   <input type="text" value={this.state.value} onChange={this.handleValueChange}/>
               </label>
               <input type="submit" value="Add Message" />
            </form>
        )
    }
}

export default connect(null, {createMessage})(MessageForm)
