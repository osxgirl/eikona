import React from 'react';
function MessageCard(props){


    return(
        <div className ="card" id={`message-${props.message.detail}`}><h2>Card</h2>
        </div>
    )
}

export default MessageCard
