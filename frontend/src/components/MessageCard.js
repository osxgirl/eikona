function MessageCard(props){
    // const {id, image, name} = props.toy // destructuring is an option
    return(
        <div class="card" id={`message-${props.id}`}>
            <h1>Messages:</h1>
            <h2>{props.detail}</h2>
        </div>
    )
}

export default MessageCard
