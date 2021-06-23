import React from 'react'
import {connect} from 'react-redux'
import {createMessage} from '../actions/messageActions'


class MessageForm extends React.Component{

    state = {
        detail: ""
    }

    handleFormChange = (e) => {
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
                <label>💬</label>
                <input type="text" detail="detail" onChange={this.handleFormChange} value={this.state.detail}/>
                <input type="submit" value="Add Message" />
            </form>
        )
    }
}

export default connect(null, {createMessage})(MessageForm)
