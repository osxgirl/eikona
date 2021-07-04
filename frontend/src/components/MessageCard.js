import React from 'react'

function MessageCard(props){

    return(
        <div className="card" id={`message-${props.id}`}>
           <h2>{props.detail}</h2>
            
        </div>
    )
}

export default MessageCard
