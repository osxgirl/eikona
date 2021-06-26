function MessageCard(props){


    return(
        <div class="card" id={`message-${props.message.id}`}>
            <h2>{props.message.detail}</h2>
        </div>
    )
}

export default MessageCard
