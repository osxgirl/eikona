function MessageCard(props){


    return(
        <div className="card" id={`message-${props.message.id}`}>
            <h2>{props.message.detail}</h2>
        </div>
    )
}

export default MessageCard
