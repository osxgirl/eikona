import React from 'react'

function MessageCard(props){

    return(
        <div className="card" id={`message-${props.id}`}>
           <ul>
            <li>{props.message.detail}</li>
          </ul>
            
        </div>
    )
}

export default MessageCard
