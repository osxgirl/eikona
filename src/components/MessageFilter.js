import React from 'react'

export default function MessageFilter(props){
    return(
        <div>
            <input type="text" placeholder="Find a Message" onChange={props.handleInputChange}/>
        </div>
    )

}
