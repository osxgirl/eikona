import React from 'react'
import {connect} from 'react-redux'
import {createMessage} from '../actions/messageActions'


class MessageForm extends React.Component{

    state = {
        detail: ""
    }

    handleFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        const message = {...this.state, likes: 0}
        
        this.props.createMessage(message)
        // save to our current state of toys
        this.setState({
          detail: ""
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>💬</label>
                <input type="text" detail="detail" onChange={this.handleFormChange} value={this.state.name}/>
                <input type="submit" value="Add Message" />
            </form>
        )
    }
}

export default connect(null, {createMessage})(MessageForm)
